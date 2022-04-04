import { Container } from 'react-bootstrap'
import AreaChartsComp from '../AreaChartsComp/AreaChartsComp'
import LineChartComp from '../LineChartComp/LineChartComp'

const Dashboard = () => {
  return (
    <div>
      <Container>
        <div className="d-md-flex justify-content-between my-5">
          <LineChartComp></LineChartComp>
          <AreaChartsComp></AreaChartsComp>
        </div>
      </Container>
    </div>
  )
}

export default Dashboard
