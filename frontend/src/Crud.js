// import React, { useRef, useState } from "react";

// function Crud() {
//     const initialList = [
//         { id: 1, Universityname: "UBT", City: "Prishtine" },
//         { id: 2, Universityname: "Ukshin Hoti", City: "Prizren"}
//     ];
    
//     const [lists, setList] = useState(initialList);
//     const [updateState, setUpdateState] = useState(null);

//     function handleEdit(id) {
//         setUpdateState(id);
//     }

//     function handleDelete(id) {
//         setList(lists.filter(item => item.id !== id));
//     }

//     return (
//         <div className="crud">
//             <AddList setList={setList} />
//             <table>
//                 <tbody>
//                     {lists.map((current) => (
//                         updateState === current.id ? (
//                             <EditList key={current.id} current={current} lists={lists} setList={setList} setUpdateState={setUpdateState} />
//                         ) : (
//                             <tr key={current.id}>
//                                 <td>{current.Universityname}</td>
//                                 <td>{current.City}</td>
//                                 <td>
//                                     <button className="edit" onClick={() => handleEdit(current.id)}>Edit</button>
//                                     <button className="delete" onClick={() => handleDelete(current.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         )
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// function EditList({ current, lists, setList, setUpdateState }) {
//     const [editedUniversityName, setEditedUniversityName] = useState(current.UniversityName);
//     const [editedCity, setEditedCity] = useState(current.City);


//     function handleInput(event) {
//         const { UniversityName,City, value } = event.target;
//         if (UniversityName === "name") setEditedUniversityName(value);
//         if (City === "name") setEditedCity(value);
//     }

//     function handleUpdate() {
//         const updatedList = lists.map(item =>
//             item.id === current.id ? { ...item, Universityname: editedUniversityName, City: editedCity, } : item
//         );

//         setList(updatedList);
//         setUpdateState(null); 
//     }

//     return (
//         <tr>
//             <td><input type="text" Universityname="name" value={editedUniversityName} onChange={handleInput} /></td>
//             <td><input type="text" City="City" value={editedCity} onChange={handleInput} /></td>
//             <td><button type="button" onClick={handleUpdate}>Update</button></td>
//         </tr>
//     );
// }

// function AddList({ setList }) {
//     const UniversityNameRef = useRef();
//     const CityRef = useRef();

//     function handleSubmit(event) {
//         event.preventDefault();
//         const UniversityName = UniversityNameRef.current.value;
//         const City = CityRef.current.value;

//         if (!UniversityName|| !City ) return; 

//         const newItem = {
//             id: Math.floor(Math.random() * 1000),
//             UniversityName,
//             City

//         };

//         setList(prevList => [...prevList, newItem]);

//         UniversityNameRef.current.value = '';
//         CityRef.current.value = '';
//     }

//     return (
//         <form className="addForm" onSubmit={handleSubmit}>
//             <input type="text" name="University" placeholder="Enter University  Name" ref={UniversityNameRef} />
//             <input type="text" name="City" placeholder="Enter City" ref={CityRef} />
//             <button type="submit">Add</button>
//         </form>
//     );
// }

// export default Crud;
