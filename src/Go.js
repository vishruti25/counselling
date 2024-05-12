import React, { useEffect, useState } from 'react';
import pb from './db'
import { Button, Container ,Table} from 'react-bootstrap';
import Sidebar from './dashboard/Sidebar';
import Navbaar from './dashboard/Navbaar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Go = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeachers, setSelectedTeachers] = useState();
  const [selectedStudents, setSelectedStudents] = useState();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filters, setFilters] = useState({ year: '2020', semester: '1', branch: '', dept: 'it' });
  const [allocationResults, setAllocationResults] = useState(new Map());
  const [year, setYear] = useState([]);
  const [sem, setSem] = useState([]);
  const [dept, setDept] = useState([]);
  const [branch, setBranch] = useState([]);
  const [allocatedStudentList, setAllocatedStudentList] = useState([]);

  
  const navigate =useNavigate()




 

  useEffect(() => {
    const fetchData = async () => {
      try{
      const teachersResponse = await pb.collection('teacher').getFullList();
      const studentsResponse = await pb.collection('student').getFullList();
      setTeachers(teachersResponse);   
      setStudents(studentsResponse);
      const dept = await pb.collection('department').getFullList();
      setDept(dept)
      console.log(dept)
      const year = await pb.collection('year').getFullList();
      setYear(year)
      const sem = await pb.collection('sem').getFullList();
      setSem(sem)
      const branch = await pb.collection('branch').getFullList();
      setBranch(branch)
      
      
    }
      catch(error){
        console.log(error)
      }
    };

    fetchData();
  }, []);
  const fetchAllocatedStudentList = async(id)=>{
    const q=`consellor='${id}'`
    console.log(q)
    const records = await pb.collection('allocation').getFullList({filter:`counsellor='${id}'`,
      expand:'counsellor,student',
  });
  setAllocatedStudentList(records)
  }


  function handleDelete(id){
    const confirm = window.confirm("would you like to delete this data?");
    if(confirm){
  
  
    axios.delete('http://localhost:8090/api/collections/allocation/records/'+id)
    .then(res =>{
        alert("record deleted successfully...")
        fetchAllocatedStudentList(selectedTeachers)
        // navigate('/go')
    })
    }
  }
  



  // const handleTeacherSelection = (teacherId) => {
  //   const newSelection = selectedTeachers.includes(teacherId)
  //     ? selectedTeachers.filter(id => id !== teacherId)
  //     : [...selectedTeachers, teacherId];
  //   setSelectedTeachers(...newSelection);
  // };

 

  

  const filterStudents = () => {
    console.log(filters,students)
    const filtered = students.filter(student => student.sem==filters.semester && student.year==filters.year
      //  && student.branch==filters.branch
      //  student.dept==filters.dept

      // (filters.year || student.year === filters.year) &&
      // (filters.semester || student.semester === filters.semester) &&
      // (!filters.branch || student.branch === filters.branch) &&
      // (!filters.department || student.department === filters.department)
    );
    console.log(filtered)
    setFilteredStudents(filtered);
  };

  useEffect(() => {
    filterStudents();
  }, [students, filters]);

  const allocateStudents = async() => {
    if (selectedTeachers.length === 0 || selectedStudents.length === 0) {
      alert("please select teacher");

    }
    else{
      pb.autoCancellation(false);
      selectedStudents.map(async selectedStudent=>{
      const data = {
        "counsellor": selectedTeachers,
        "student":selectedStudent
    };   
      const record = await pb.collection('allocation').create(data);
      setAllocationResults(record);
      fetchAllocatedStudentList(selectedTeachers);


    })
      
      
      alert("students are allocated")
    }

  };











  return (
    <div className='d-flex'>
        <div className='w-auto'>
          <Sidebar/>
        </div>
        <div className='col '>
          <Navbaar/>
          
        
    
    <div className='container mt-5 row col-md-8 offset-md-2 ' style={{ display: 'grid', justifyContent:'center' }}>
      
      <div class ='bg-light text-dark'>
        <h2>Filters</h2>
        <hr></hr>
        <label>Year: 
          {/* <input name="year" value={filters.year} onChange={handleFilterChange} /> */}
          <select value={filters.year} onChange={e => {setFilters({...filters,year:e.target.value});filterStudents()}}>
            {
              year && year.map((d,i)=>(
              <option key={i} value={d.year}>{d.year}</option>))
            }
          </select>
          </label><br />
        <label>Semester: 
          {/* <input name="semester" value={filters.semester} onChange={handleFilterChange} /> */}
        <select value={filters.semester} onChange={e => {setFilters({...filters,semester:e.target.value});filterStudents()}}>
        {
              sem && sem.map((d,i)=>(
              <option key={i} value={d.sem}>{d.sem}</option>))
            }
        </select>
        </label><br />         
        {/* <label>Department:
        <select value={filters.dept} onChange={e => {setFilters({...filters,dept:e.target.value});filterStudents()}}>
          {
            dept && dept.map((d,i)=>(
            <option key={i} value={d.dept}>{d.dept}</option>))
          }
        </select>
        </label><br /> */}
        {/* <label>Branch:           
          <select>
        {
          branch && branch.map((d,i)=>(
          <option key={i} value={d.branch}>{d.branch}</option>))
        }
        </select>
        </label><br /> */}
        
        <hr/>
        {/* <label>Number to Allocate: <input type="number" value={numToAllocate} onChange={handleNumToAllocateChange} /></label><br /> */}
      </div>
      <div className='container mt-5 ' style={{ display: 'flex', justifyContent: 'space-around', }}>
        {/* <p>{JSON.stringify(selectedStudents)}</p>
        <p>{JSON.stringify(selectedTeachers)}</p> */}


      <div class ='bg-light text-dark' style={{ background: 'skyblue', padding: '10px',color:'white' }}>
        <h1>All Teachers Name</h1>
        <select  value={selectedTeachers} onChange={e => {setSelectedTeachers(e.target.value);fetchAllocatedStudentList (e.target.value)}}>
          <option></option>
          {teachers && teachers.map(teacher => (
            <option key={teacher.id} style={{ cursor: 'pointer' }} value={teacher.id} >
              {teacher.name} 
              {selectedTeachers?.includes(teacher.id) ? '(Selected)' : ''}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div >
      <Button variant="outline-secondary" size='lg' onClick={allocateStudents}>Allocate</Button>
      </div>
      </div>
      <div  class ='bg-light text-dark' style={{ background: '', color: 'white', padding: '10px' }}>
        <h1 class='text-dark'>All Students Name</h1>
        <select multiple value={selectedStudents} onChange={e=>{
          const options =[...e.target.selectedOptions];
          const values = options.map(option=>option.value);
          setSelectedStudents(values)}}>
          {filteredStudents && filteredStudents.map(student => (
            <option value={student.id} >{student.username}</option>
          ))}
        </select>
      </div>
      </div>
      <div>
      <h4>allocated students under {selectedTeachers}</h4>
      <Table striped   className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Student</th>
                    
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { allocatedStudentList && allocatedStudentList.map((d,i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d?.expand?.student?.username}</td>
                        
                        <td >
                           <i onClick={e => handleDelete(d.id)} style ={{color:'red', }} class="bi bi-x-square bg-red"></i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
      {/* <table>{
        allocatedStudentList && allocatedStudentList.map(list =>(
          
        ))
      }
      </table> */}

      </div>

      
        {/* <div style={{ display: 'grid', justifyContent: 'space-around', }}>

        <hr></hr>
        <div class ='bg-light text-dark'>
        <h2 >Allocation Results :Consellor Name and Students Name Under them </h2>
        <p>{selectedTeachers}</p>
        <ol>
          {selectedStudents && selectedStudents.map((student, index) => (
          <li key={index}>{student}</li>
          ))}
        </ol> */}

        {/* <p>{selectedStudents.join(',,')}</p> */}



        {/* {
        Array.from(allocationResults.entries()).map(([, allocatedStudents]) => {
          const teacherName = teachers.find(teacher => teacher.id === teacherId)?.name;
          return (
            <div>
              <p></p>
            </div>
            
            // <div key={teacherId}>
            //   <h3>{teacherName}</h3>
            //   <ul>
            //     {allocatedStudents.map((studentName) => (
            //       <li >{studentName}</li>
            //     ))}
            //   </ul>
            // </div>
          );
        })} 
       </div>
      </div>
      */}
      </div>
      </div>
    </div>
    
  );
};

export default Go;
