import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Shield, 
  Database, 
  Terminal, 
  Cpu, 
  Sparkles,
  CheckCircle,
  Copy,
  Check,
  Code2,
  Play
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'api' | 'demo'>('overview');
  const [copied, setCopied] = useState(false);
  const [demoActive, setDemoActive] = useState(false);
  const [codeSample, setCodeSample] = useState(`// Spring Boot 3 Controller & Security
@RestController
@RequestMapping("/api/v1/files")
@RequiredArgsConstructor
public class FileStorageController {

    private final StorageService storageService;
    private final SecurityUtils securityUtils;

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<FileUploadResponse> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam("isPublic") boolean isPublic,
            @AuthenticationPrincipal UserPrincipal currentUser) {
        
        FileUploadResponse response = storageService.processAndStore(file, currentUser.getId(), isPublic);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}`);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      
      {/* Dialog container */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 font-mono">
              {project.category}
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="flex border-b border-slate-200 px-6 bg-white gap-6 text-sm font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 border-b-2 transition-all ${
              activeTab === 'architecture'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3 border-b-2 transition-all ${
              activeTab === 'demo'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Live Simulator
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  About the Project
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.architecture && Object.entries(project.architecture).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      {key}
                    </span>
                    <p className="text-sm font-semibold text-slate-800 mt-1">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-4">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>SampleBackendController.java</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{codeSample}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>{project.title} - Interactive Testbed</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Status: 200 OK
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2">
                <p className="text-slate-400">HTTP/1.1 200 OK</p>
                <p className="text-slate-400">Content-Type: application/json;charset=UTF-8</p>
                <div className="text-cyan-300 pt-2">
                  &#123;
                  <div className="pl-4 text-emerald-300">"service": "{project.title}",</div>
                  <div className="pl-4 text-slate-300">"health": "UP",</div>
                  <div className="pl-4 text-slate-300">"authMethod": "JWT Bearer",</div>
                  <div className="pl-4 text-slate-300">"clusterNodes": 2,</div>
                  <div className="pl-4 text-amber-300">"latencyMs": 14.8</div>
                  &#125;
                </div>
              </div>

              <p className="text-xs text-slate-400">
                This project was engineered for production stability, tested with JUnit & Mockito, with role-based JWT security.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {project.title} &bull; Spring Boot + React
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
