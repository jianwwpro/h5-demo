const digitsRE = /(\d{3})(?=\d)/g

export function map (map, key, attr) {
  console.log(map)
  if(attr!=null && attr != ''){
   
    return map.get(key)[attr];
  }
  return map.get(key);
}
