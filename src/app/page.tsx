
import Header from '../components/Header'

import Achievements from '../components/Achievements'
import ProjectsGrid from '@/components/ProjectsGrid';
import ExperienceSection from '@/components/workexpreince';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-4">
        <Header />
        <ExperienceSection />
<ProjectsGrid />
        <Achievements />
      </div>
    </main>
  );
}
