async function retrieveData() {
    const images = [];

    try {
        const query = `select url, formats from files`
        const res = await client.query(query);
        const rows = res.rows;

        for(let row of rows) {
           const {url = null, formats = null} = row;
        
           if(url && url.includes('staging-docdn')) {
            images.push(url)
           }

           if(formats) {
            const {small = null, medium = null, thumbnail = null, large = null} = formats;
            if(small && small.url.includes('staging-docdn')) {
                images.push(small.url)
            }
            if(medium && medium.url.includes('staging-docdn')) {
                images.push(medium.url)
            }
            if(thumbnail && thumbnail.url.includes('staging-docdn')) {
                images.push(thumbnail.url)
            }
            if(large && large.url.includes('staging-docdn')) {
                images.push(large.url)
            }
           }
        }
    } catch (error) {
      console.error(error);
    }

    return images;
}
  
const handleWriteDataToFile = async () => {
    const images = await retrieveData();
    writeData(images)
}

handleWriteDataToFile()