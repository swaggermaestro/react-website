import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
    bigContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%",
      height: "100%",
    },
    sandboxContainer: {
      background: "#233",
      textAlign: "center",
      position: "relative",
      margin: "1rem",
      borderRadius: "10px",
      padding: "1rem",
      flex: "1 0 auto",
      minWidth: "40rem",
      maxWidth: "40rem",
    },
  }));
  
  const Crypto = () => {
    const classes = useStyles();
    let ADAqty = 158.1417
    let ETHqty = 0.03412685

    const [ADAprice, setADAprice] = React.useState(0);
    const [ETHprice, setETHprice] = React.useState(0);
    const [ADAtotal, setADAtotal] = React.useState(0);
    const [ETHtotal, setETHtotal] = React.useState(0);

    fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=Ethereum&vs_currencies=zar`
    ).then(response => {
        if (response.ok) {
            return response
        }
        throw new Error('Something went wrong');
    
    }).then(response => {
        response.json().then(data => {
            setETHprice(data.ethereum.zar)
            setETHtotal(ETHqty * ETHprice)
        })
    }).catch((error) => {
        console.log(error)
    })

    fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=zar`
    ).then(response => {
        if (response.ok) {
            return response
        }
        throw new Error('Something went wrong');
    
    }).then(response => {
        response.json().then(data => {
            setADAprice(data.cardano.zar)
            setADAtotal(ADAqty * ADAprice)
        })
    }).catch((error) => {
        console.log(error)
    })

    return (
      <Box component="div" className={classes.bigContainer}>
        <Box component="div" className={classes.sandboxContainer}>
        <h1 style={{color: "white"}}>Luno Crypto Wallet</h1>
        <h3 style={{color: "tomato"}}>Ethereum ({ETHqty.toFixed(4)}): R{Math.round(ETHtotal)}</h3>
        <h3 style={{color: "tomato"}}>Cardano ({ADAqty.toFixed(2)}): R{Math.round(ADAtotal)}</h3>
        <h3 style={{color: "tomato"}}>Total: R{Math.round(ADAtotal + ETHtotal)}</h3>
        </Box>
        {/* <Box component="div" className={classes.sandboxContainer}>
          <Leaderboard
            leaderboardData={[            { name: "Alice", score: 100 },            { name: "Bob", score: 80 },            { name: "Charlie", score: 60 },            { name: "David", score: 40 },            { name: "Eve", score: 20 },          ]}
          />
        </Box> */}
      </Box>
    );
  };



    







    // React.useEffect(() => {
    //     axios.get(url, {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json',
    //         },
    //         mode: 'no-cors',
    //         auth: {
    //             username: username,
    //             password: password
    //         }
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // }, [])

  
  
  export default Crypto;