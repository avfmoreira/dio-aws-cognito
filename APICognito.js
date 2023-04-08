import AWS from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();

export const handler = async(event) => {
    const {id, item} = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const newTableItem = {
        id,
        item,
        createdAt,
        itemStatus: false
    };
    let response;

    try{
        await dynamodb.put({
            TableName: "TableAPICognito",
            Item: newTableItem
        }).promise();    
    } catch (err){
        response = {
            statusCode: 200,
            body: JSON.stringify(err)
        };
    }
    
    response = {
        statusCode: 200,
        body: JSON.stringify(newTableItem)
    };

    return response;
};
