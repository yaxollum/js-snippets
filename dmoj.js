function addCases(n) {
  while (document.getElementById(`id_cases-${n}-input_file`) === null) {
    document.getElementById("add-case-row").click();
  }
  for (let i = 1; i <= n; ++i) {
    document.getElementById(`id_cases-${i}-input_file`).value = `${i}.in`;
    document.getElementById(`id_cases-${i}-output_file`).value = `${i}.out`;
  }
}

function deleteAllCases() {
  document.querySelectorAll("#case-table tr td input").forEach((x) => {
    if (/cases-\d+-DELETE/.test(x.name)) {
      x.checked = true;
    }
  });
}
