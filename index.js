
exports.handler = async (event, context) => {
    console.log('I am the terraform load')
    return {
      statusCode: 200,
      body: "Welcome to terraform aws",
    };
  };