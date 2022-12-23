import java.util.ArrayList;

public class Folder extends Unit {

    ArrayList<Unit> fileList;

    public Folder(String entryName, Folder directory) {
        super(entryName, directory);
        fileList = new ArrayList<Unit>();
    }

    public int size() {
        int size = 0;
        for (Unit e: fileList) {
            size += e.size();
        }
        return size;
    }

    public void addUnit(Unit unit){
        fileList.add(unit);
    }

    public boolean deleteUnit(Unit unit){
        return fileList.remove(unit);
    }

    protected ArrayList<Unit> getContents() { return fileList; }
    private void openFolder() {
        System.out.printf("Opened %s file%n", this.name);
    }

    public void openUnit(){
        openFolder();
    }
}
