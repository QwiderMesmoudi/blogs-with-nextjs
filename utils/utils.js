export const DateFormat=(firestoreTimestamp)=>{
const date = new Date(firestoreTimestamp.seconds * 1000);

// Optional: Format the date to a convenient string format (e.g., MM/DD/YYYY or other)
const formattedDate = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});
return formattedDate
}