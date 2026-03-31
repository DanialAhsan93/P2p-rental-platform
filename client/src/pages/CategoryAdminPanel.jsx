// import React, { useEffect, useState } from "react";

// export default function CategoryAdminPanel() {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState("");
//   const [parent, setParent] = useState("");
//   const [level, setLevel] = useState(1);

//   const API = "http://localhost:3000/api/category"; // adjust if needed

//   const fetchCategories = async () => {
//     const res = await fetch(API);
//     const data = await res.json();
//     setCategories(data);
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleCreate = async () => {
//   if (!name) return alert("Name required");

//   await fetch(`${API}/create`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name,
//       parent: parent || null,
//       level,
//     }),
//   });

//   setName("");
//   setParent("");
//   setLevel(1);
//   fetchCategories();
// };
//   const handleDelete = async (id) => {
//   if (!window.confirm("Delete this category?")) return;

//   await fetch(`${API}/delete/${id}`, {
//     method: "DELETE",
//   });

//   fetchCategories();
// };

//   const renderOptions = (cats, prefix = "") => {
//     return cats.flatMap((cat) => [
//       <option key={cat._id} value={cat._id}>
//         {prefix + cat.name}
//       </option>,
//       ...(cat.children ? renderOptions(cat.children, prefix + "--") : []),
//     ]);
//   };

//   const renderTree = (cats) => {
//     return cats.map((cat) => (
//       <div key={cat._id} className="ml-4 border-l pl-4 mt-2">
//         <div className="flex justify-between items-center">
//           <span>
//             {cat.name} (L{cat.level})
//           </span>
//           <button
//             onClick={() => handleDelete(cat._id)}
//             className="text-red-500"
//           >
//             Delete
//           </button>
//         </div>

//         {cat.children && renderTree(cat.children)}
//       </div>
//     ));
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Category Admin Panel</h1>

//       <div className="bg-white shadow p-4 rounded mb-6">
//         <h2 className="font-semibold mb-2">Create Category</h2>

//         <input
//           type="text"
//           placeholder="Category Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2 w-full mb-2"
//         />

//         <select
//           value={parent}
//           onChange={(e) => {
//             const selected = e.target.value;
//             setParent(selected);

//             const findLevel = (cats, id) => {
//               for (let c of cats) {
//                 if (c._id === id) return c.level;
//                 if (c.children) {
//                   const l = findLevel(c.children, id);
//                   if (l) return l;
//                 }
//               }
//             };

//             const parentLevel = findLevel(categories, selected);
//             setLevel(parentLevel ? parentLevel + 1 : 1);
//           }}
//           className="border p-2 w-full mb-2"
//         >
//           <option value="">No Parent (Main Category)</option>
//           {renderOptions(categories)}
//         </select>

//         <button
//           onClick={handleCreate}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Category
//         </button>
//       </div>

//       <div className="bg-white shadow p-4 rounded">
//         <h2 className="font-semibold mb-2">All Categories</h2>
//         {renderTree(categories)}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";

export default function CategoryAdminPanel() {
  const [categories, setCategories] = useState([]);
  const [mainName, setMainName] = useState("");
  const [subName, setSubName] = useState("");
  const [miniName, setMiniName] = useState("");
  const [mainImage, setMainImage] = useState("");
const [subImage, setSubImage] = useState("");
const [miniImage, setMiniImage] = useState("");

  const [selectedMain, setSelectedMain] = useState("");
  const [selectedSub, setSelectedSub] = useState("");

  const API = "http://localhost:3000/api/category"; // make sure proxy or full URL

  // Fetch categories
  const fetchCategories = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Create category
  const createCategory = async (name, parent = null, level) => {
    if (!name) return alert("Name required");
    await fetch(`${API}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, parent, level }),
    });
    fetchCategories();
  };

  // Delete category
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    await fetch(`${API}/delete/${id}`, { method: "DELETE" });
    fetchCategories();
  };

  // Helpers to get children
  const getSubCategories = (mainId) =>
    categories.find((c) => c._id === mainId)?.children || [];
  const getMiniCategories = (subId) =>
    categories
      .flatMap((c) => c.children || [])
      .find((s) => s._id === subId)?.children || [];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Category Admin Panel</h1>

      {/* MAIN CATEGORY */}
      <div className="bg-white shadow p-4 rounded">
        <h2 className="font-semibold mb-2">Main Categories</h2>
        <input
          type="text"
          placeholder="Main category name"
          value={mainName}
          onChange={(e) => setMainName(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={() => { createCategory(mainName, null, 1); setMainName(""); }}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        >
          Add Main Category
        </button>

        <div className="mt-2">
          {categories.map((cat) => (
            <div key={cat._id} className="flex justify-between items-center border p-2 mb-1">
              <span>{cat.name}</span>
              <button onClick={() => handleDelete(cat._id)} className="text-red-500">Delete</button>
            </div>
          ))}
        </div>
      </div>
<input
  type="text"
  placeholder="Image URL"
  value={mainImage}
  onChange={(e) => setMainImage(e.target.value)}
  className="border p-2 w-full mb-2"
/>
      {/* SUB CATEGORY */}
      <div className="bg-white shadow p-4 rounded">
        <h2 className="font-semibold mb-2">Sub Categories</h2>
        <select
          value={selectedMain}
          onChange={(e) => setSelectedMain(e.target.value)}
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Main Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Sub category name"
          value={subName}
          onChange={(e) => setSubName(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={() => { createCategory(subName, selectedMain, 2); setSubName(""); }}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
          disabled={!selectedMain}
        >
          Add Sub Category
        </button>

        <div className="mt-2">
          {selectedMain && getSubCategories(selectedMain).map((sub) => (
            <div key={sub._id} className="flex justify-between items-center border p-2 mb-1">
              <span>{sub.name}</span>
              <button onClick={() => handleDelete(sub._id)} className="text-red-500">Delete</button>
            </div>
          ))}
        </div>
      </div>
      <input
  type="text"
  placeholder="Image URL"
  value={subImage}
  onChange={(e) => setSubImage(e.target.value)}
  className="border p-2 w-full mb-2"
/>

      {/* MINI CATEGORY */}
      <div className="bg-white shadow p-4 rounded">
        <h2 className="font-semibold mb-2">Mini Categories</h2>

        <select
          value={selectedMain}
          onChange={(e) => { setSelectedMain(e.target.value); setSelectedSub(""); }}
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Main Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>

        <select
          value={selectedSub}
          onChange={(e) => setSelectedSub(e.target.value)}
          className="border p-2 w-full mb-2"
          disabled={!selectedMain}
        >
          <option value="">Select Sub Category</option>
          {selectedMain && getSubCategories(selectedMain).map((sub) => (
            <option key={sub._id} value={sub._id}>{sub.name}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Mini category name"
          value={miniName}
          onChange={(e) => setMiniName(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={() => { createCategory(miniName, selectedSub, 3); setMiniName(""); }}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
          disabled={!selectedSub}
        >
          Add Mini Category
        </button>
        <input
          type="text"
          placeholder="Image URL"
          value={miniImage}
          onChange={(e) => setMiniImage(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <div className="mt-2">
          {selectedSub && getMiniCategories(selectedSub).map((mini) => (
            <div key={mini._id} className="flex justify-between items-center border p-2 mb-1">
              <span>{mini.name}</span>
              <button onClick={() => handleDelete(mini._id)} className="text-red-500">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}