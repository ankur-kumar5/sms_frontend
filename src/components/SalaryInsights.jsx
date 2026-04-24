import React, { useState } from "react";

function SalaryInsights() {
  const [mode, setMode] = useState("country"); // 'country' | 'job'
  const [form, setForm] = useState({
    country: "",
    job_title: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.country) {
      setError("Country is required");
      return;
    }

    if (mode === "job" && !form.job_title) {
      setError("Job title is required");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      let url = "";

      if (mode === "country") {
        url = `http://localhost:3000/insights/country?country=${form.country}`;
      } else {
        url = `http://localhost:3000/insights/job_title?country=${form.country}&job_title=${form.job_title}`;
      }

      const res = await fetch(url);
      const json = await res.json();

      setResult(json);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Mode Selection */}
      <div style={{ marginBottom: "15px" }}>
        <label>
          <input
            type="radio"
            value="country"
            checked={mode === "country"}
            onChange={() => setMode("country")}
          />
          Country Stats
        </label>

        <label style={{ marginLeft: "15px" }}>
          <input
            type="radio"
            value="job"
            checked={mode === "job"}
            onChange={() => setMode("job")}
          />
          Job Title Average
        </label>
      </div>

      {/* Single Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
          />
        </div>

        {/* Conditional Field */}
        {mode === "job" && (
          <div style={{ marginTop: "10px" }}>
            <input
              name="job_title"
              placeholder="Job Title"
              value={form.job_title}
              onChange={handleChange}
            />
          </div>
        )}

        <button type="submit" style={{ marginTop: "10px" }}>
          {loading ? "Loading..." : "Get Insights"}
        </button>
      </form>

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Result */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          {mode === "country" ? (
            <>
              <p>Min: {result.min}</p>
              <p>Max: {result.max}</p>
              <p>Avg: {result.avg}</p>
            </>
          ) : (
            <p>
              Average Salary: {result.average_salary || "No Data"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SalaryInsights;