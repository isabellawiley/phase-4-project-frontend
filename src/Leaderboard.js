import {Card, ListGroup, Row, Col, Table} from 'react-bootstrap';

function Leaderboard({allNerds}){
    const sortedNerdsArr = allNerds.sort((a,b) => b.total_points - a.total_points)
    // let rank = 0;
    // const topTenNerdsArr = sortedNerdsArr.slice(0,10).map((nerd) => {
    //     rank += 1;
    //     return <h2>{rank}. {nerd.name} Total Points: {nerd.total_points} </h2>
    // })
    // console.log(topTenNerdsArr);
    console.log(sortedNerdsArr)
    const topTenNerdsArr = sortedNerdsArr.slice(0,10)
    console.log(topTenNerdsArr);


    return(
        <div style={{width: '40%', margin: 'auto', paddingBottom: '100px'}}>
            <h1>WHO WILL BE THE ULTIMATE NERD?</h1>
            { allNerds.length ? 
            <div>
                <Table striped bordered variant="dark" style={{marginTop: "20px"}}>
                    <thead>
                        <tr>
                            <th width='70'>Rank</th>
                            <th width='150'>Name</th>
                            <th width='150'>Total Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{topTenNerdsArr[0].name}</td>
                            <td>{topTenNerdsArr[0].total_points}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{topTenNerdsArr[1].name}</td>
                            <td>{topTenNerdsArr[1].total_points}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{topTenNerdsArr[2].name}</td>
                            <td>{topTenNerdsArr[2].total_points}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{topTenNerdsArr[3].name}</td>
                            <td>{topTenNerdsArr[3].total_points}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{topTenNerdsArr[4].name}</td>
                            <td>{topTenNerdsArr[4].total_points}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>{topTenNerdsArr[5].name}</td>
                            <td>{topTenNerdsArr[5].total_points}</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>{topTenNerdsArr[6].name}</td>
                            <td>{topTenNerdsArr[6].total_points}</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>{topTenNerdsArr[7].name}</td>
                            <td>{topTenNerdsArr[7].total_points}</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>{topTenNerdsArr[8].name}</td>
                            <td>{topTenNerdsArr[8].total_points}</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>{topTenNerdsArr[9].name}</td>
                            <td>{topTenNerdsArr[9].total_points}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            : 
            <h1>Loading...</h1>
            }
            {/* <Card bg='light' style={{ width: '30rem', backgroundColor: 'white' }}>
                <Card.Header as='h1'>Leaderboard</Card.Header>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>1</h2></Col>
                            <Col><h2>{topTenNerdsArr[0].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[0].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>2</h2></Col>
                            <Col><h2>{topTenNerdsArr[1].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[1].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>3</h2></Col>
                            <Col><h2>{topTenNerdsArr[2].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[2].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>4</h2></Col>
                            <Col><h2>{topTenNerdsArr[3].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[3].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>5</h2></Col>
                            <Col><h2>{topTenNerdsArr[4].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[4].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>6</h2></Col>
                            <Col><h2>{topTenNerdsArr[5].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[5].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>7</h2></Col>
                            <Col><h2>{topTenNerdsArr[6].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[6].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>8</h2></Col>
                            <Col><h2>{topTenNerdsArr[7].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[7].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>9</h2></Col>
                            <Col><h2>{topTenNerdsArr[8].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[8].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col><h2>10</h2></Col>
                            <Col><h2>{topTenNerdsArr[9].name}</h2></Col>
                            <Col><h2>{topTenNerdsArr[9].total_points}</h2></Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card> */}
        </div>
    )
}

export default Leaderboard;