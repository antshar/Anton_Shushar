public abstract class Unit {

    protected Folder parent;
    protected String name;

    public Unit(String name, Folder parent){
        this.name = name;
        this.parent = parent;
    }

    public boolean delete(Unit unit){
        if(parent == null) return false;
        return parent.deleteUnit(this);
    }

    public abstract int size();
    public abstract void openUnit();

    public String getFullPath(){
        if( parent == null ) return name;
        else return parent.getFullPath() + "/" + name;
    }

    public void changeName(String name) { this.name = name; }
    public String getName() { return this.name; }
}
