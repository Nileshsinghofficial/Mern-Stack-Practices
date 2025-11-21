export function getGreetings(hours){
    if (hours < 4 || hours >=19) return 'Good night';
    if(hours < 9) return 'Good morning';
    if(hours < 16 ) return 'Good afternoon';
    return "Good evening"
}


// Export 
// Common js -> Old

// module.exports = getGreetings;

// ESM

// export default getGreetings;