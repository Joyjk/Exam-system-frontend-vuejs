<template>
    <div >
        <form >
        <div class="container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Question</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Question Picture Attachment</label>
                <input type="file" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" >
                <label class="btn btn-outline-primary" for="btnradio1">Written</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                <label class="btn btn-outline-primary" for="btnradio2">MCQ</label>

                
                </div>
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 1</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 2</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 3</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 4</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Option 5</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Sample Written Ans</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correct Ans</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Add</button>
            
            </div>
        </div>
        </form>
        <br>
    </div>
</template>