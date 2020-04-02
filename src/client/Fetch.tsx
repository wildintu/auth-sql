let Fetch = async (blogs: object, url: string, methodtype: string) => {
    try {
      let response = await fetch(url, {
        method: methodtype,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(blogs)
      });
      return await response.text();
    } catch (err) {
      console.log(err);
    }
  };
  
  export default Fetch;
  