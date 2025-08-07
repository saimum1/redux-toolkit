import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment, deleteAppointment, updateAppointment } from './Redux/ApppointmentSlice';
const Todo = () => {
// const data=[]
const data=useSelector((state)=>state.appointmentR.appointments)
const [title, setTitle] = useState('')
const [editId, seteditId] = useState(false)
const [date, setDate] = useState()
const [selectedapp, setselectedapp] = useState()
const dispatch=useDispatch()

console.log("sample",useSelector((state)=>state.appointmentR.appointments))


const handleEdit=(app)=>{
console.log("app",app)
setselectedapp(app)
 
}

const handleDelete=(appid)=>{
 dispatch(deleteAppointment(appid.id))
}

const handleSubmit=(event)=>{

   event.preventDefault()
   if(editId){
    let data={
     'id':selectedapp.id,
    'title':title,
    'date':date
  }
 dispatch(updateAppointment(data))
   }else{

    let data={
     'id': Date.now(),
    'title':title,
    'date':date
  }

  dispatch(addAppointment(data))

   }
 
   seteditId(false)
   setTitle('')
   setDate('')
}

  return (
   <div className="App">
      <h1>Book Appointment</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Appointment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Appointment</button>
      </form>
      <ul>
        {data?.map((app) => (
          <li key={app.id}>
            {app.title} - {app.date}
            <button onClick={() => {handleEdit(app);seteditId(true)}}>Edit</button>
            <button onClick={() => handleDelete(app)}>Delete</button>
          </li>
        ))}
      </ul>
      <style>
        {`


.App {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
input, button {
  margin: 5px;
  padding: 8px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
button {
  cursor: pointer;
}
        
        
        `}
      </style>
    </div>

  )
}

export default Todo