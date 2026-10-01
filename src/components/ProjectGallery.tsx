import React, { useState } from 'react';
import { GALLERY_PROJECTS, ProjectItem } from '../data/company';
import { ArchitecturalImage } from './ArchitecturalImage';
import { Eye, ArrowUpRight, X, MapPin, Check } from 'lucide-react';

interface ProjectGalleryProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Commercial',
    'Residential',
    'Curtain Walls',
    'Storefronts',
    'Shower Enclosures',
    'Skylights'
  ];

  const filteredProjects = selectedFilter === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => 
        p.category.toLowerCase().includes(selectedFilter.toLowerCase()) || 
        (selectedFilter === 'Commercial' && (p.category === 'Curtain Walls' || p.category === 'Storefronts')) || 
        (selectedFilter === 'Residential' && (p.category === 'Shower Enclosures' || p.category === 'Skylights'))
      );

  return (
    <section id="our-work" className="py-24 section-clear text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#DDE2E4] gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2">
              Representative Installations
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111315] mb-3 [text-wrap:balance]">
              Architectural Glazing Portfolio &amp; Systems.
            </h2>
            <p className="text-sm text-[#7B8388]">
              Explore recent architectural glass fabrication and field installations across Greensboro, Guilford County, and North Carolina.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#FFFFFF] rounded-lg border border-[#DDE2E4] shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === cat
                    ? 'btn-steel shadow-xs'
                    : 'text-[#7B8388] hover:text-[#111315] hover:bg-[#F1F5F8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Pure White Cards with Light Steel Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-steel group rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-[16/11]">
                <ArchitecturalImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  overlayText={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-[#527187] border border-[#DDE2E4]">
                  {project.category}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="absolute bottom-3 right-3 bg-[#FFFFFF] hover:bg-[#F1F5F8] text-[#111315] p-2 rounded-full border border-[#DDE2E4] shadow-md cursor-pointer transition-transform hover:scale-110"
                  aria-label={`View details of ${project.title}`}
                >
                  <Eye className="w-4 h-4 text-[#527187]" />
                </button>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-[#FFFFFF]">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#7B8388] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#527187]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#111315] mb-2 group-hover:text-[#527187] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#7B8388] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DDE2E4] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#7B8388]">
                    {project.systemType}
                  </span>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-[#527187] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111315]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FFFFFF] rounded-2xl max-w-2xl w-full border border-[#DDE2E4] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col text-[#111315]">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 bg-[#FFFFFF] text-[#7B8388] hover:text-[#111315] p-2 rounded-full border border-[#DDE2E4] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden bg-[#F1F5F8]">
              <ArchitecturalImage
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                overlayText={activeProject.title}
              />
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#527187]">
                <span>{activeProject.category}</span>
                <span>·</span>
                <span>{activeProject.location}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#111315]">
                {activeProject.title}
              </h3>

              <p className="text-sm text-[#7B8388] leading-relaxed">
                {activeProject.description}
              </p>

              <div className="bg-[#F1F5F8] rounded-lg p-4 border border-[#DDE2E4] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#527187]">
                  Project Scope &amp; Engineering:
                </div>
                <div className="flex items-center gap-2 text-xs text-[#111315]">
                  <Check className="w-4 h-4 text-[#527187]" />
                  <span>Installed System: {activeProject.systemType}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#111315]">
                  <Check className="w-4 h-4 text-[#527187]" />
                  <span>Fabricated &amp; Glazed by Empire Glass In-House Field Teams</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDE2E4] flex items-center justify-between">
                <button
                  onClick={() => {
                    const title = activeProject.title;
                    setActiveProject(null);
                    onOpenQuoteModal(title);
                  }}
                  className="btn-steel w-full py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Request Quote Similar to This Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
