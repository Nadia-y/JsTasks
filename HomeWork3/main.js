const users = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female',
      ip_address: '26.58.193.2',
    },
    {
      id: 2,
      first_name: 'Petr',
      last_name: 'Jackson',
      email: 'gfrediani1@senate.gov',
      gender: 'Male',
      ip_address: '229.179.4.212',
    },
  ];


const returnObject = (arr)=>{
    if(!Array.isArray(arr)) return;
    return arr.reduce((result, element)=>{
      users['fullname']= first_name + last_name
      
        if(users.gender ==='Female'){
           result.push(element)
        }

            return result
        
    
    },{
        Women:[{}],
        Men:[{}]
    })
}




  console.log(returnObject(users));

  