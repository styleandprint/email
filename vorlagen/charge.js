var nr = this.mQuicktext.get_att(["name"]);
nrClean = nr.replace(".pdf", "");
this.mWindow.document.getElementById('msgSubject').value = nrClean;
return nrClean;
