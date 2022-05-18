<template>
  <div>
    <h1>Register candidate for exam</h1>
    <div class="container">
      <div class="row">
        <form action="">
         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Enter Candidate Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
        </div>
         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Candidate Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Candidate Phone</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
        </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Select Candidate Type</label>
          <select class="form-select form-select-lg mb-3" style="text-align:center" aria-label=".form-select-lg example">
            <option selected>Candidate Type</option>
            <option value="1">Engineer</option>
            <option value="2">HR</option>
            <option value="3">Accounts</option>
            </select>
          </div>

          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Select Candidate Session</label>
          <select class="form-select form-select-lg mb-3" style="text-align:center" aria-label=".form-select-lg example">
            <option selected>Candidate Session</option>
            <option value="1">April-Jr.Developer</option>
            <option value="2">January-Developer</option>
            <option value="3">August-FrontEnd-Developer</option>
            </select>
          </div>
          <div class="d-grid gap-2">
            
            <button class="btn btn-primary" type="button">Submit</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>