import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface IRecentPage {
  id: string;
  name: string;
  visitCount: number;
}

interface RecentPagesState {
  recentPages: IRecentPage[];
}

interface RecentPagesActions {
  addVisitedPage: (id: string, name: string) => void;
  getRecentPages: () => IRecentPage[];
  removeAllRecentPages: () => void;
}
type RecentPagesStore = RecentPagesState & RecentPagesActions;
export const useRecentPagesStore = create<RecentPagesStore>()(
  persist(
    (
      set: (arg0: (state: any) => { recentPages: IRecentPage[] }) => void,
      get: () => { (): any; new (): any; recentPages: any }
    ) => ({
      recentPages: [],
      addVisitedPage: (id: any, name: any) => {
        set((state: RecentPagesState) => {
          const existingPageIndex = state.recentPages.findIndex(
            (page: { id: any }) => page.id === id
          );
          let newRecentPages: IRecentPage[];

          if (existingPageIndex !== -1) {
            // Page already exists, update visit count
            newRecentPages = [...state.recentPages];
            newRecentPages[existingPageIndex].visitCount++;
          } else {
            // New page, add to the list
            newRecentPages = [
              { id, name, visitCount: 1 },
              ...state.recentPages,
            ];
          }

          // Sort by visit count (descending) and then by most recent
          newRecentPages.sort(
            (a, b) =>
              b.visitCount - a.visitCount ||
              newRecentPages.indexOf(a) - newRecentPages.indexOf(b)
          );

          // Keep only the top 5
          return { recentPages: newRecentPages.slice(0, 5) };
        });
      },
      getRecentPages: () => get().recentPages,
      // @ts-ignore
      removeAllRecentPages: () => set({ recentPages: [] }),
    }),
    {
      name: 'recent-pages-storage',
    }
  )
);

export interface ISelectedComponent {
  componentName: string;
  pagelink: string;
  fileSrc: string;
  type: string;
}

interface SelectedComponentState {
  recentComponents: ISelectedComponent[];
  addSelectedComponent: (component: ISelectedComponent) => void;
  getRecentComponents: () => ISelectedComponent[];
  removeAllRecentComponents: () => void;
}

export const useSelectedComponentStore = create<SelectedComponentState>()(
  persist(
    (set, get) => ({
      recentComponents: [],
      addSelectedComponent: (component) => {
        set((state) => {
          const existingComponentIndex = state.recentComponents.findIndex(
            (c) =>
              c.componentName === component.componentName &&
              c.type === component.type
          );
          let newRecentComponents: ISelectedComponent[];

          if (existingComponentIndex !== -1) {
            // Component already exists, move it to the front
            newRecentComponents = [
              component,
              ...state.recentComponents.filter(
                (_, index) => index !== existingComponentIndex
              ),
            ];
          } else {
            // New component, add to the front of the list
            newRecentComponents = [component, ...state.recentComponents];
          }

          // Keep only the last 15 components
          return { recentComponents: newRecentComponents.slice(0, 15) };
        });
      },
      getRecentComponents: () => get().recentComponents,
      removeAllRecentComponents: () => set({ recentComponents: [] }),
    }),
    {
      name: 'recent-components-storage',
    }
  )
);
interface State {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
export const useStateChange = create<State>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),
}));
