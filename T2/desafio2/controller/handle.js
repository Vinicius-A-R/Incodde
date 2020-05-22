export function showList(list, body) {
  list.map((item) => {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    if (item !== '') {
      body.appendChild(tr);
      td1.innerHTML = `${item.id}`;
      td2.innerHTML = `${item.name}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
    }
  });
}

export function addList(btn, input, list, body) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value === '') {
      input.placeholder = 'Invalid User!';
    } else {
      let n = 0;
      let check;

      list.map((el) => {
        if (el.name === input.value) {
          check = true;
        }
      });

      if (check) {
        input.placeholder = 'User already exists!';
      } else {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        let newList = {
          id: '',
          name: '',
        };

        let date = new Date();
        newList.id = date.getMilliseconds();
        newList.name = input.value;

        list.push(newList);

        body.appendChild(tr);
        td1.innerHTML = `${newList.id}`;
        td2.innerHTML = `${newList.name}`;
        tr.appendChild(td1);
        tr.appendChild(td2);
      }

      input.value = '';
      input.addEventListener('focus', () => (input.placeholder = ''));
    }
  });
}
