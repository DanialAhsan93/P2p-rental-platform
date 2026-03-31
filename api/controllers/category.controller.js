import Category from "../models/category.model.js";
import slugify from "slugify";

export const createCategory = async (req, res, next) => {
  try {
    const { name, parent, level, image } = req.body;

    const slug = slugify(name, { lower: true });

    const category = new Category({
      name,
      slug,
      parent: parent || null,
      level,
      image: image || "",
    });

    await category.save();

    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().lean();

    const buildTree = (parentId = null) => {
      return categories
        .filter(cat => String(cat.parent) === String(parentId))
        .map(cat => ({
          ...cat,
          children: buildTree(cat._id),
        }));
    };

    const tree = buildTree(null);

    res.status(200).json(tree);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const { name , image } = req.body;

    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name,
        image,
        slug: slugify(name, { lower: true }),
      },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id;

    // delete all children recursively
    const deleteChildren = async (id) => {
      const children = await Category.find({ parent: id });

      for (let child of children) {
        await deleteChildren(child._id);
      }

      await Category.findByIdAndDelete(id);
    };

    await deleteChildren(categoryId);

    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    next(error);
  }
};