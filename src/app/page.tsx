
import Header from '../components/Header'
import ProjectsGrid from '../components/ProjectsGrid'
import Achievements from '../components/Achievements'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-4">
        <Header />
        <ProjectsGrid />
        <Achievements />
      </div>
    </main>
  );
}
