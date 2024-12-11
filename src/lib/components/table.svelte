<script>
  export let schedules;

  let attendance = {
    studentName: '',
    siLeader: '',
  };

  async function submitAttendance(sessionId) {
    const user = supabase.auth.user();

    if (!user) {
      alert('Sign In First');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('attendance')
        .insert([
          {
            session_id: sessionId,
            si_leader: attendance.siLeader,
            student_name: attendance.studentName,
            cwid_id: parseInt(attendance.studentName.replace(/\D/g, '')),
            attended_at: new Date(),
          },
        ]);
      if (error) {
        console.error('Error storing attendance:', error);
        alert('There was an error recording your attendance. Please try again.');
      } else {
        alert('Attendance recorded successfully!');
        showConfirmationPopup();
      }
    } catch (err) {
      console.error('Error: ', err);
      alert('Something went wrong. Please try again.');
    }
  }

  function showConfirmationPopup() {
    const confirmation = confirm('Attendance recorded! Do you want to sign out or continue?');
    if (confirmation) {
      supabase.auth.signOut();
      alert('You have signed out.');
    } else {
      alert('You can continue attending sessions.');
    }
  }
</script>

<div class="schedule-cards">
  {#each Object.entries(schedules.sessionsOffered) as [classTitle, sessionsOffered]}
    <div class="schedule-entry">
      <h2 class="class-title">{classTitle}</h2>
      <div class="card-container">
        {#each sessionsOffered as sessionInfo}
          <div class="card">
            <p class="si-leader-text"><strong>SI Leader:</strong> {sessionInfo.siLeader}</p>
            <p><strong>Days:</strong> {sessionInfo.sessionDays}</p>
            <p><strong>Times:</strong> {sessionInfo.sessionTimes}</p>
            <p><strong>Location:</strong> {sessionInfo.location}</p>
            <p>{sessionInfo.classNumber}</p>
            <p><strong>Instructor:</strong> {sessionInfo.courseInstructor}</p>
            <button on:click={() => submitAttendance(sessionInfo.classNumber)} class="mark-attendance-btn">
              Mark Session
            </button>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .schedule-cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .schedule-entry {
    padding: 1rem;
    border-radius: 8px;
  }

  .class-title {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    color: #007bff;
  }

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }

  .card {
    background-color: rgb(var(--color-background-500));
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .mark-attendance-btn {
    width: 100%;
    background-color: #007bff;
    color: white;
    padding: 0.5rem;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .mark-attendance-btn:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }

  .si-leader-text {
    font-size: 1.6rem;
    font-weight: bold;
    color: #007bff;
  }

  .card p {
    font-size: 1.3rem;
    line-height: 1.6;
  }

  .card p strong {
    font-size: 1.3rem;
  }
</style>
