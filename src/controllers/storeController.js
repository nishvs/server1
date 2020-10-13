var axios = require('axios');

export const getResponse = async (req, res, aiResponse) => {
    const { botId, message, conversationId } = req.body;
    let requestBody = { botId, message, conversationId, aiResponse };
    return axios.post(process.env.STORE_ENDPOINT+process.env.STORE_INTENT_ROUTE,requestBody).then((res)=>{
        return res.data
    })
    .catch((error)=>{      
        console.log("Error receiving data",error)  
        res.status = 500;
        return requestBody;
    });
}