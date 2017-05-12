lista = {}	
x = 1
contSent = 1
contTok = 1
contText = 1
strLine = ""	
with open("Summ-it++v2.txt", "r", encoding="iso-8859-1") as file:
	for line in file:
	    if line == "#end document\n":
	        contSent = 1
	        contText = contText + 1
	    if line == "\n":
	        if strLine.find("class='org'") >= 0:
	            if strLine.find("class='org'", strLine.find("class='org") + 1) >= 0:
	                lista[x] = strLine
	                x = x + 1
	            elif strLine.find("class='per'") >= 0:
	                lista[x] = strLine
	                x = x + 1
	            elif strLine.find("class='per'") >= 0:
	                lista[x] = strLine
	                x = x + 1
	        contTok = 1
	        contSent = contSent + 1
	        strLine = ""
	    columns = line.split('\t')
	    if len(columns) == 9: 
	        if columns[6] == "(PLC" or columns[6] == "(PLC)" or columns[6] == "PLC)" or columns[6] == "PLC":
	            strLine += "<span class='entity' class='plc' style='color:red' id='tok"+str(contTok)+"sent"+str(contSent)+"text"+str(contText)+"'>"+columns[1]+"</span> "
	            contTok = contTok + 1
	        elif columns[6] == "(ORG" or columns[6] == "(ORG)" or columns[6] == "ORG)" or columns[6] == "ORG":
	            strLine += "<span class='entity' class='org' style='color:blue' id='tok"+str(contTok)+"sent"+str(contSent)+"text"+str(contText)+"'>"+columns[1]+"</span> "
	            contTok = contTok + 1
	        elif columns[6] == "(PER" or columns[6] == "(PER)" or columns[6] == "PER)" or columns[6] == "PER":
	            strLine += "<span class='entity' class='per' style='color:green' id='tok"+str(contTok)+"sent"+str(contSent)+"text"+str(contText)+"'>"+columns[1]+"</span> "
	            contTok = contTok + 1
	        elif len(columns[6]) > 1:
	            strLine += "<span class='entity' id='tok"+str(contTok)+"sent"+str(contSent)+"text"+str(contText)+"'>"+columns[1]+"</span> "
	        else:
	            strLine += "<span class='word' id='tok"+str(contTok)+"sent"+str(contSent)+"text"+str(contText)+"'>"+columns[1]+"</span> "
	            contTok = contTok + 1
	
with open("saida.txt", "a") as myfile:
	y = 1
	while (y <= x - 1):
		myfile.write(lista[y])
		myfile.write("\n")
		y = y + 1
