<script>
	export let schedules;
  
	// This object holds the data needed for the attendance
	let attendance = {
	  studentName: '',
	  siLeader: '',
	};
  
	// Function to handle the attendance submission
	async function submitAttendance(sessionId) {
	  try {
		const { data, error } = await supabase
		  .from('attendance') // Ensure this is the correct table name
		  .insert([
			{
			  session_id: sessionId,
			  si_leader: attendance.siLeader,
			  student_name: attendance.studentName,
			  cwid_id: parseInt(attendance.studentName.replace(/\D/g, '')), // Example logic for CWID (extracts number from name)
			  attended_at: new Date(), // Current timestamp
			},
		  ]);
		if (error) {
		  console.error('Error storing attendance:', error);
		  alert('There was an error recording your attendance. Please try again.');
		} else {
		  alert('Attendance recorded successfully!');
		  // Trigger confirmation screen (optional)
		  showConfirmationPopup();
		}
	  } catch (err) {
		console.error('Error: ', err);
		alert('Something went wrong. Please try again.');
	  }
	}
  
	// Function to show confirmation pop-up (optional)
	function showConfirmationPopup() {
	  const confirmation = confirm('Attendance recorded! Do you want to sign out or continue?');
	  if (confirmation) {
		// Handle sign-out logic (e.g., supabase.auth.signOut())
		supabase.auth.signOut();
		alert('You have signed out.');
	  } else {
		alert('You can continue attending sessions.');
	  }
	}
  </script>
  
  <!-- Component to hold each department's table -->
  {#each Object.entries(schedules.sessionsOffered) as [classTitle, sessionsOffered]}
	<div class="schedule-entry">
	  <h3>{classTitle}</h3>
	  <table>
		<thead>
		  <tr>
			<th>Class Number</th>
			<th>Course Instructor</th>
			<th>SI Leader</th>
			<th>Session Days</th>
			<th>Session Times</th>
			<th>Location</th>
			<th>Attendance</th> <!-- Added header for attendance -->
		  </tr>
		</thead>
		<tbody>
		  {#each sessionsOffered as sessionInfo}
			<tr>
			  <td>{sessionInfo.classNumber}</td>
			  <td>{sessionInfo.courseInstructor}</td>
			  <td>{sessionInfo.siLeader}</td>
			  <td>{sessionInfo.sessionDays}</td>
			  <td>{sessionInfo.sessionTimes}</td>
			  <td>{sessionInfo.location}</td>
			  <td>
				<!-- Add the "Mark Attendance" button under each session -->
				<button 
				  on:click={() => submitAttendance(sessionInfo.classNumber)}
				  class="mark-attendance-btn">
				  Mark Attendance
				</button>
			  </td>
			</tr>
		  {/each}
		</tbody>
	  </table>
	</div>
  {/each}
  
  <!-- Styling for each department's table -->
  <style>
	.schedule-entry {
	  margin-block: 0.5rem;
	}
  
	.schedule-entry > h3 {
	  padding: 1rem 0;
	}
  
	table {
	  width: 100%;
	  border-collapse: collapse;
	  font-size: 18px;
	  text-align: left;
	}
  
	table th,
	table td {
	  padding: 0.5rem 1rem;
	  text-align: left;
	}
  
	table thead tr {
	  text-align: left;
	  border: 2px solid white;
	  background-color: rgb(var(--color-background-500));
	}
  
	table tbody tr {
	  border: 2px solid #dddddd;
	}
  
	/* Button for marking attendance */
	.mark-attendance-btn {
	  width: 100%; /* Make the button take up the full width */
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
  </style>
  