const isPractice = (title) => {
    return title.startsWith('Vận dụng') || title.startsWith('HĐ') || title.startsWith('Thực hành') || title.startsWith('Bài')
}
  
const updateSubTitleById = async (id, subTitle) => {
    // SQL query to update records
    const updateQuery = `
        UPDATE components_content_practices
        SET sub_title = '${subTitle}'
        WHERE id = ${id};
    `;

    try {
        await client.query(updateQuery)
    } catch (error) {
        console.error(error)
    }
}

  
async function getSubTitleFromSubContent(client) {
    const contents = [];
  
    try {
        const query = `select id, title, sub_title from components_content_practices where sub_title isnull and title notnull`
        const res = await client.query(query);
        const rows = res.rows;
        for(let content of rows) {
          const {id, title} = content;
          if(isPractice(title)) {
            console.log(`${id} - ${title} - ${title.split(':')[0]}`)
            await updateSubTitleById(id, title.split(':')[0])
          }
        }
    } catch (error) {
        console.error(error);
    }
  
    return contents;
}

module.exports = {getSubTitleFromSubContent}