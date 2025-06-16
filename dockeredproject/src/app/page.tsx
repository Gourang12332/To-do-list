import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎉 Deployment Successful! 🎉</h1>
        <p style={styles.message}>
          Your project has been successfully deployed using <strong>Jenkins</strong> with a fully automated <strong>CI/CD pipeline</strong>.
        </p>
        <div style={styles.jenkinsBadge}>
          <img
            src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg"
            alt="Jenkins Logo"
            style={styles.jenkinsLogo}
          />
          <p style={styles.jenkinsText}>Powered by Jenkins</p>
        </div>
        <p style={styles.footer}>
          🚀 Keep building amazing things! Your CI/CD pipeline is ready to handle future deployments.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '90%',
  },
  title: {
    fontSize: '2rem',
    color: '#4CAF50',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
  jenkinsBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  jenkinsLogo: {
    width: '50px',
    height: '50px',
    marginRight: '0.5rem',
  },
  jenkinsText: {
    fontSize: '1rem',
    color: '#333',
  },
  footer: {
    fontSize: '1rem',
    color: '#666',
    marginTop: '1rem',
  },
};
