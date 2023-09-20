import { LineChart as Lchart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const studentMarks = [
        {"student": "Student 1", "math": 85, "physics": 78, "chemistry": 90},
        {"student": "Student 2", "math": 90, "physics": 82, "chemistry": 85},
        {"student": "Student 3", "math": 78, "physics": 75, "chemistry": 80},
        {"student": "Student 4", "math": 92, "physics": 88, "chemistry": 95},
        {"student": "Student 5", "math": 88, "physics": 80, "chemistry": 92},
        {"student": "Student 6", "math": 95, "physics": 85, "chemistry": 88},
        {"student": "Student 7", "math": 80, "physics": 75, "chemistry": 82},
        {"student": "Student 8", "math": 85, "physics": 78, "chemistry": 90},
        {"student": "Student 9", "math": 90, "physics": 82, "chemistry": 85},
        {"student": "Student 10", "math": 78, "physics": 75, "chemistry": 80}
      ]
      
    return (
        <div className='md:w-500'>
            <Lchart width={800} height={500} data={studentMarks}>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            <Line type={'monotone'} dataKey={'math'} stroke='red'></Line>
            <Line type={'monotone'} dataKey={'physics'} stroke='blue'></Line>
            <Line type={'monotone'} dataKey={'chemistry'} stroke='green'></Line>
            </Lchart>
            
        </div>
    );
};

export default LineCharts;