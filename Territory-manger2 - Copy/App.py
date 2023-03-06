import eel
import gspread

sa = gspread.service_account(filename="service_account.json")
sh = sa.open("Territory")
wks = sh.worksheet("Sheet1")

#getting data

#print(wks.acell('A5').value)
#print(wks.get("A1:A6"))
#setting data
#wks.update('A9',"test")

def toJSONString(l,count):
    return '{"row":"' + str(count) + '","tid":"' + l[0] + '","publisher":"'+ l[1] +'","dateAssigned":"'+ l[2] +'","record":"' + l[3] + '","imgrc":"'+ l[4] +'"},'

def getExcelData():

    is_empty = False
    count = 2
    result = []
    while(not is_empty):
        if len(wks.row_values(count)) == 0:
            is_empty = True
        else:
            result.append(wks.row_values(count))
            count += 1

    return result

#converts data from excel database into JSON
def toJSON(data):

    is_empty = False
    count = 2
    result = '{"tList":['
    for i in range(0,len(data)):
        result = result + toJSONString(data[i],count)
        count += 1
    result = result + "]}"

    return result.replace(",]}","]}")

#print(toJSON(data))

@eel.expose
def hello():
    print("hello")

#get data from excel
@eel.expose
def getData():
    eel.showData(toJSON(data))

@eel.expose
def deleteRow(row):
    data.pop(int(row) - 2)

@eel.expose
def saveData():
    print('saving do not close')
    eel.upDateSaveMsg('<h1 id="save-msg" class="popup-title">Saving Please do not close...</h1>')
    wks.clear()
    wks.update('A1','tid')
    wks.update('B1','publisher')
    wks.update('C1','date')
    wks.update('D1','record')
    wks.update('E1','imgrc')

    for i in range(2,len(data) + 2):
        #set  A B C D E
        wks.update('A'+str(i),data[i-2][0])
        wks.update('B'+str(i),data[i-2][1])
        wks.update('C'+str(i),data[i-2][2])
        wks.update('D'+str(i),data[i-2][3])
        wks.update('E'+str(i),data[i-2][4])
    print('saved')
    eel.upDateSaveMsg('<h1>Saved</h1> <a class="close" href="#">&times;</a> <img class="loading-icon" src="images/icons/save-icon.png">')
#excel data (array)
data = getExcelData()        
    

#set up ui
eel.init('UI')
eel.start('index.html',size=(1650, 1200), position=(0,0))