function Bio() {
  const name = "Hemant Kumar Gola";
  const age = 20;
  const city = "Moradabad";
  const profession = "MERN Stack Student";

  return (
    <div>
      <h1>My Bio</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

export default Bio;