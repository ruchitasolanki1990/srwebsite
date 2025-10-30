 export const getValueByKey =(pagekey, pagecontent) => {
    
     const val = pagecontent.find((item) => item.pagekey === pagekey)?.pagevalue
   
      return val ? val : "No data found";
  }
  