import statsData from "./data.json"
import './statistics.css'


export const Statistics = () => {
 
    return (
        <section className="statistics">
  <h2 className="title">Upload stats</h2>
  <ul className="stat-list">
  {statsData.map(({id , label , percentage}) => (
        <li key={id} className="item">
            <span className="label">  {label}</span>
            <span className="percentage"> {percentage}%</span>
        </li> 
        ))}
    </ul>
</section>
    )
}




// [
//     { "id": "id-1", "label": ".docx", "percentage": 22 },
//     { "id": "id-2", "label": ".pdf", "percentage": 4 },
//     { "id": "id-3", "label": ".mp3", "percentage": 17 },
//     { "id": "id-4", "label": ".psd", "percentage": 47 },
//     { "id": "id-5", "label": ".pdf", "percentage": 10 }
//   ]
  