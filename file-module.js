const fs=require('fs')
const filepath='./file.txt';
const createFile=()=>{
    fs.writeFileSync(filepath,'Hello World','utf8');
    console.log("File Created.")
}
const readFile=()=>{
    const fileData=fs.readFileSync(filepath,'utf8');
    console.log(`Data in file : ${fileData}`);
}
const writeFile=(newContent)=>{
    fs.writeFileSync(filepath,newContent,'utf8')
    console.log('File Written.')
    console.log(first)
}
const updateFile=(appendContent)=>{
    fs.appendFileSync(filepath,appendContent,'utf8')
    console.log('File Updated')
}
const deleteFile=()=>{
    fs.unlinkSync(filepath)
    console.log('Deleted Successfully')
}
createFile()
readFile()
writeFile('Hi ')
readFile()
updateFile('Vasanth')
readFile()
deleteFile();