export const codingErrors = [
  {
    slug: "js-cannot-read-properties-of-undefined-map",
    title: "How to Fix 'TypeError: Cannot read properties of undefined (reading 'map')' in JavaScript & React",
    errorText: "TypeError: Cannot read properties of undefined (reading 'map')",
    framework: "JavaScript / React",
    difficulty: "Beginner",
    cause: "This error occurs when you attempt to call the `.map()` method on a variable that is currently `undefined` or `null` instead of an array. This commonly happens in React when fetching async data from an API, where the initial state is empty, or when the API response does not contain the expected array field.",
    solution: "1. Initialize your state with a default empty array `[]` instead of leaving it undefined.\n2. Use optional chaining (`data?.map(...)`) to safely check if the array exists before mapping.\n3. Add a loading state or conditional guard (`if (!data) return null`) to prevent rendering before data arrives.",
    badCode: `// Buggy Implementation in React
function UserList() {
  const [users, setUsers] = useState(); // Defaults to undefined!

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <ul>
      {/* Crashes here because users is initially undefined */}
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
    goodCode: `// Correct Implementation using Default State & Optional Chaining
function UserList() {
  // 1. Initialize state as an empty array
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data.users || [])); // Fallback array
  }, []);

  return (
    <ul>
      {/* 2. Optional chaining is used for extra safety */}
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
  },
  {
    slug: "react-hook-useeffect-missing-dependency",
    title: "How to Fix React Hook useEffect Has a Missing Dependency Warning",
    errorText: "React Hook useEffect has a missing dependency: 'fetchData'. Either include it or remove the dependency array.",
    framework: "React",
    difficulty: "Intermediate",
    cause: "This warning/error is triggered by the React ESLint plugin. It means that your `useEffect` hook relies on a function, state variable, or prop defined outside the hook, but that variable was not included in the dependency array. If that variable changes, the hook will refer to stale/old values.",
    solution: "1. Move the function or variable inside the `useEffect` block if it is only used there.\n2. If the function must remain outside, wrap it in a `useCallback` hook to prevent it from re-creating on every render.\n3. Add the variable to the dependency array.",
    badCode: `// Buggy Implementation causing ESLint Warning
function SearchComponent({ query }) {
  const [results, setResults] = useState([]);

  // fetchData is defined outside the hook
  const fetchData = () => {
    fetch(\`/api/search?q=\${query}\`)
      .then(res => res.json())
      .then(data => setResults(data));
  };

  useEffect(() => {
    fetchData(); 
    // Missing 'fetchData' dependency warning!
  }, []); 

  return <ResultsList data={results} />;
}`,
    goodCode: `// Correct Implementation: Move Function Inside useEffect
function SearchComponent({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // 1. Move function inside to make dependencies clear
    const fetchData = () => {
      fetch(\`/api/search?q=\${query}\`)
        .then(res => res.json())
        .then(data => setResults(data));
    };

    fetchData();
  }, [query]); // 2. Add 'query' to dependency array

  return <ResultsList data={results} />;
}`
  },
  {
    slug: "python-keyerror",
    title: "How to Solve 'KeyError' in Python Dictionaries",
    errorText: "KeyError: 'email'",
    framework: "Python",
    difficulty: "Beginner",
    cause: "A `KeyError` is raised in Python when you attempt to access a dictionary key that does not exist in the dictionary. It is Python's way of telling you that the lookup identifier you passed is invalid.",
    solution: "1. Use the `.get('key')` method, which safely returns `None` (or a default value) instead of raising an error.\n2. Check if the key exists before accessing it using the `in` operator.\n3. Wrap the lookup in a `try/except KeyError` block.",
    badCode: `# Buggy dictionary lookup
user_data = {
    "name": "Kone",
    "role": "Developer"
}

# Raises KeyError: 'email' because key is missing
user_email = user_data["email"]
print(user_email)
`,
    goodCode: `# Safe dictionary lookup options
user_data = {
    "name": "Kone",
    "role": "Developer"
}

# Option 1: Use .get() method with a fallback default value
user_email = user_data.get("email", "no-email@koneacademy.io")
print(user_email) # Output: no-email@koneacademy.io

# Option 2: Pre-check using 'in' operator
if "email" in user_data:
    print(user_data["email"])
else:
    print("Email key not found!")
`
  }
];
