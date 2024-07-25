let calculation =  localStorage.getItem('calculation') || '';

      result();

      function updateCalculation(value) {
        calculation += value;
        result();
        localStorage.setItem('calculation', calculation);
      }

      function result() {
        document.querySelector('.js-result')
          .innerHTML = `${calculation}`;
    }

      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }