<template>
  <div id="app">
    <header>
      <h1>{{ name }}</h1>
      <h2>{{ title }}</h2>
    </header>
    <section>
      <h3>Profile</h3>
      <ul>
        <li v-for="edu in education" :key="edu.institution">{{ edu.degree }} from {{ edu.institution }} ({{ edu.year }})</li>
      </ul>
    </section>
    <section>
      <h3>Skills</h3>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Nathaniel I. Calo",
      education: [
        { degree: "Bachelor of Science in Information Technology Major in Web Development", institution: "Holy Angel University", year: "2022" },
      ],
      skills: ["JavaScript", "Vue.js", "Node.js", "HTML", "CSS"],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f8f9fa; /* Light background */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  margin: 0;
  padding: 20px;
}

#app {
  max-width: 600px;
  margin: auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  margin: 0;
  font-size: 2.5em;
  color: #6f42c1; /* Purple */
  text-shadow: 0 0 5px rgba(111, 66, 193, 0.5);
}

h2 {
  color: #6c757d; /* Gray */
  font-weight: normal;
  font-size: 1.5em;
}

section {
  margin-top: 25px;
}

h3 {
  border-bottom: 2px solid #6f42c1; /* Purple */
  padding-bottom: 5px;
  color: #6f42c1; /* Purple */
  font-size: 1.8em;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: rgba(111, 66, 193, 0.1); /* Light purple background */
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  transition: background 0.3s, transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

li:hover {
  background: rgba(111, 66, 193, 0.2); /* Darker purple on hover */
  transform: translateY(-2px);
}
</style>
