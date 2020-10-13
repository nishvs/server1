var axios = require('axios');

export const receiveIntents = async (req) => {

    const { botId, message, conversationId} = req.body;
    let requestBody = { botId,message, conversationId };

    return axios.post(process.env.AI_ENDPOINT+process.env.INTENT_ROUTE,requestBody,{
        headers : {
            'Authorization':process.env.API_KEY
        }
    }).then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        throw new Error(error);
    });
}