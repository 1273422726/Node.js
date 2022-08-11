function renderHTML(url) {
  switch (url) {
    case "/home":
      return `  
          <html>
              <b>我是home页面</b>
          </html>
      `;
    case "/list":
      return `  
          <html>
              <b>我是list页面</b>
          </html>
      `;
    case "/api/list":
      return `  
          ["list1", "list2", "list3", "list4"]
      `;
    case "/api/home":
      return `  
          {
              name:"admin",
              password:"admin",
              age:"18",
          }
      `;
    default:
      return `  
          <html>
              <b>no default</b>
          </html>
      `;
  }
}

module.exports = {
  renderHTML,
};
