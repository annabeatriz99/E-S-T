const JWT = "PINATA_JWT";

async function uploadFile() {
  try {
    const text = "welcome!";
    const blob = new Blob([text], { type: "text/plain" });
    const file = new File([blob], "welcome.txt");
    const data = new FormData();
    data.append("file", file);
    data.append("network", "public")

    const request = await fetch(
      "https://uploads.pinata.cloud/v3/files",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
        body: data,
      }
    );
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}