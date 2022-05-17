import {useState} from 'react';

const gifts = [
  'CPU i9',
  'RAM 32GB',
  'RGB Keyboard'
]

// API
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {

  // '??' must be undefined or null => get after value
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) ?? [])

  const handleSubmit = () => {
    setJobs(prevState => {
      const newJobs = [...prevState, job]

      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')


  }

  return (
    <div className="App">
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
