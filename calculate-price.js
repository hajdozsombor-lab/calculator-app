exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body);
    const width = Number(body.width);
    const height = Number(body.height);

    if (!width || !height) return { statusCode: 400, body: JSON.stringify({ error: "Hiányzó méret" }) };

    // Egységárak, később itt változtathatod
    const unitWidth = 20;  // RON/cm
    const unitHeight = 30; // RON/cm

    const price = width * unitWidth + height * unitHeight;

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" }, // CORS engedély
      body: JSON.stringify({ price })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Hiba a számításnál" }) };
  }
};
