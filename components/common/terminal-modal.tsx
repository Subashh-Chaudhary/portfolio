"use client"

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Square, Terminal } from 'lucide-react'

// Types for virtual filesystem
type VirtualFile = {
  type: 'file'
  content: string
}

type VirtualDirectory = {
  type: 'directory'
  children: { [name: string]: VirtualNode }
}

type VirtualNode = VirtualFile | VirtualDirectory

interface TerminalLine {
  id: string
  type: 'input' | 'output'
  dir?: string
  command?: string
  content: string | React.ReactNode
}

interface TerminalModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(true)
  const [currentDir, setCurrentDir] = useState('/home/subash')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isStartupRunning, setIsStartupRunning] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Dracula Theme Colors:
  // Background: #282a36
  // Current Line/Selection: #44475a
  // Foreground: #f8f8f2
  // Comment: #6272a4
  // Cyan: #8be9fd
  // Green: #50fa7b
  // Orange: #ffb86c
  // Pink: #ff79c6
  // Purple: #bd93f9
  // Red: #ff5555
  // Yellow: #f1fa8c

  // Virtual filesystem structure
  const filesystem: VirtualDirectory = useMemo(() => ({
    type: 'directory',
    children: {
      home: {
        type: 'directory',
        children: {
          subash: {
            type: 'directory',
            children: {
              'about.txt': {
                type: 'file',
                content: `======================================================
                 WHO IS SUBASH?
======================================================
Name: Subash Tharu
Role: Backend Engineer & Full Stack Developer
Tagline: Building scalable APIs & production-grade systems.

Bio:
Backend engineer with 2.5 years of professional experience
designing REST APIs, microservices, and full stack
applications — including government platforms serving
5,000+ citizens across Nepal. 

I started as a frontend developer and evolved into backend
and systems work: database schema design, query optimization,
Docker deployments, and service-oriented architecture.

Core Values:
- Continuous Learning: Always expanding the stack.
- Real-World Impact: Solving genuine citizen & agricultural issues.
- Clean Architecture: Decoupled, maintainable services.
- Performance-First: Obsessed with optimized queries (pg_trgm, GiST).`
              },
              'skills.txt': {
                type: 'file',
                content: `======================================================
                 PRIMARY TECH STACK
======================================================
[Backend]
- Node.js, NestJS (Primary)
- Express.js, Go (Golang), FastAPI (Python)
- REST API Design, JWT/Passport, Microservices

[Database & Storage]
- PostgreSQL (Excellent), PostGIS (Geospatial)
- MySQL, Redis (Caching/Queueing)
- Elasticsearch, MongoDB

[DevOps & Cloud]
- Docker, Docker Compose
- Nginx reverse proxies, Linux (Ubuntu/Arch/Fedora)
- Traefik routing, Git & GitHub Actions (CI/CD)

[Frontend]
- React.js, Next.js, TypeScript
- HTML5, CSS3, Tailwind CSS
- React Native (Expo)

[Tools & Utilities]
- Postman, Figma, Cloudinary, VS Code, osm2pgsql`
              },
              'experience.txt': {
                type: 'file',
                content: `======================================================
                 PROFESSIONAL WORK EXPERIENCE
======================================================
1. Junior Full Stack Developer
   Ninja Infosys Pvt. Ltd. | Anamnagar, Kathmandu, Nepal
   Feb 2024 - Mar 2026
   - Led backend development of enterprise platforms for government clients.
   - Built Integrated Content Management System (ICMS) using NestJS/Next.js.
   - Designed Citizen Charter platform with Go and React.js, exposing 20+ APIs.
   - Optimized PostgreSQL database schemas, reducing average API response times by 30%.
   - Platform served 5,000+ citizen users with zero reported security incidents.
   - Maintained Ubuntu server deployments using Docker, Docker Compose, and Nginx.

2. Full Stack Developer Intern
   Ninja Infosys Pvt. Ltd. | Anamnagar, Kathmandu, Nepal
   Nov 2023 - Feb 2024
   - Shipped 5 frontend features & resolved 20+ bugs across Node.js/React.
   - Assisted with Docker configurations and Linux staging deployment.`
              },
              'projects': {
                type: 'directory',
                children: {
                  'portfolio.md': {
                    type: 'file',
                    content: `# Portfolio Website
An immersive, 3D developer portfolio showcasing work, projects, and Linux curiosity.
- Stack: Next.js 14, React, Tailwind CSS, Framer Motion, Three.js
- Highlight: Real-time fully functional terminal simulation (SU_BASH_TERMINAL)`
                  },
                  'ecommerce.md': {
                    type: 'file',
                    content: `# E-Commerce Backend Service
A highly scalable, production-grade e-commerce backend.
- Stack: NestJS, TypeScript, PostgreSQL, TypeORM, Redis, BullMQ, Docker
- Features: Order queueing, cache-aside pattern, Stripe payment integration, full-text search.`
                  },
                  'ai-agent.md': {
                    type: 'file',
                    content: `# AgriVision AI & AI-Agent Orchestrator
ML-powered crop disease diagnosis platform and autonomous tool workflow runner.
- Stack: NestJS, FastAPI, Python, EfficientNet ML, Go, LangChain, PostgreSQL
- Outcomes: Reduced crop disease diagnosis turnaround from days to <60s.`
                  }
                }
              },
              'achievements.txt': {
                type: 'file',
                content: `======================================================
                 KEY CAREER ACHIEVEMENTS
======================================================
* Reduced average API response times by 30% on high-traffic endpoints.
* Built & deployed government CMS serving 5,000+ users with zero safety issues.
* Decreased average citizen inquiry resolution time by ~40% via automated workflows.
* Delivered production-grade React Native app in a single 3-month sprint.
* Maintained 99.9% uptime across production Linux VPS servers.`
              },
              'contact.txt': {
                type: 'file',
                content: `======================================================
                 CONTACT INFORMATION
======================================================
Feel free to reach out to collaborate on systems or APIs!

Email      : subashtharu.dev@gmail.com
Phone      : +977 9706821175
Location   : Gwarko, Lalitpur, Nepal
GitHub     : https://github.com/Subashh-Chaudhary
LinkedIn   : https://www.linkedin.com/in/developer-subash/
Twitter/X  : https://x.com/Suv_Aas
Website    : https://subashtharu.com.np`
              },
              'resume.pdf': {
                type: 'file',
                content: `[PDF Binary Document]
Name: subash_tharu_resume.pdf
Size: 142 KB

This is a simulated PDF file.
To open or download the actual resume, run:
  open resume.pdf

Alternatively, access the document directly at:
  https://subashtharu.com.np/resume.pdf`
              }
            }
          }
        }
      }
    }
  }), [])

  // Helper: Traverse to node
  const getNodeByPath = (path: string): VirtualNode | null => {
    const parts = path.split('/').filter(Boolean)
    let currentNode: VirtualNode = filesystem
    for (const part of parts) {
      if (currentNode.type !== 'directory') return null
      const nextNode: VirtualNode | undefined = (currentNode as VirtualDirectory).children[part]
      if (!nextNode) return null
      currentNode = nextNode
    }
    return currentNode
  }

  // Helper: Relative path for prompt representation
  const getPromptPath = useCallback((path: string) => {
    if (path === '/home/subash') return '~'
    if (path.startsWith('/home/subash/')) {
      return '~' + path.slice('/home/subash'.length)
    }
    return path
  }, [])

  // Autoscroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [lines])

  // Focus input on mount/open or container click
  useEffect(() => {
    if (isOpen && !isStartupRunning) {
      setTimeout(() => {
        inputRef.current?.focus()
        setIsFocused(true)
      }, 100)
    }
  }, [isOpen, isStartupRunning])

  const focusInput = () => {
    if (!isStartupRunning) {
      inputRef.current?.focus()
      setIsFocused(true)
    }
  }

  // Startup typing animation sequence
  useEffect(() => {
    if (!isOpen) return

    setIsStartupRunning(true)
    setLines([
      {
        id: 'start-1',
        type: 'output',
        content: (
          <span className="text-[#6272a4]">
            Welcome to Su_bash Terminal v1.0.0 (x86_64-pc-linux-gnu)
            <br />
            Type <span className="text-[#f1fa8c] font-semibold">'help'</span> to see a list of available commands.
            <br />
            System initialized. Loading developer profile...
          </span>
        )
      }
    ])

    const cmdText = 'neofetch'
    let currentIdx = 0

    // Pause before typing
    const timer = setTimeout(() => {
      // Create typing input line
      const inputLineId = 'typing-cmd'
      setLines(prev => [
        ...prev,
        {
          id: inputLineId,
          type: 'input',
          dir: '/home/subash',
          command: '',
          content: ''
        }
      ])

      typingIntervalRef.current = setInterval(() => {
        if (currentIdx < cmdText.length) {
          const letter = cmdText[currentIdx]
          setLines(prev =>
            prev.map(line =>
              line.id === inputLineId
                ? { ...line, command: (line.command || '') + letter }
                : line
            )
          )
          currentIdx++
        } else {
          if (typingIntervalRef.current) clearInterval(typingIntervalRef.current)
          // Press enter simulation
          setTimeout(() => {
            executeCommand('neofetch', true)
            setIsStartupRunning(false)
          }, 400)
        }
      }, 80)
    }, 800)

    return () => {
      clearTimeout(timer)
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  // Recursive tree formatter
  const formatTree = (node: VirtualNode, indent = ''): string[] => {
    const lines: string[] = []
    if (node.type === 'directory') {
      const keys = Object.keys(node.children).sort()
      keys.forEach((key, index) => {
        const isLast = index === keys.length - 1
        const child = node.children[key]
        const marker = isLast ? '└── ' : '├── '
        if (child.type === 'directory') {
          lines.push(`${indent}${marker}${key}/`)
          const nextIndent = indent + (isLast ? '    ' : '│   ')
          lines.push(...formatTree(child, nextIndent))
        } else {
          lines.push(`${indent}${marker}${key}`)
        }
      })
    }
    return lines
  }

  // Count files and directories for tree summary
  const countFileSystem = (node: VirtualNode): { dirs: number; files: number } => {
    let dirs = 0
    let files = 0
    const traverse = (n: VirtualNode) => {
      if (n.type === 'directory') {
        Object.values(n.children).forEach(child => {
          if (child.type === 'directory') {
            dirs++
            traverse(child)
          } else {
            files++
          }
        })
      }
    }
    traverse(node)
    return { dirs, files }
  }

  // Path resolution (e.g. support cd ., cd .., cd /home/subash/projects, cd projects)
  const resolvePath = (targetPath: string): string | null => {
    if (!targetPath) return '/home/subash'
    
    let resolvedParts: string[] = []
    if (targetPath.startsWith('/')) {
      resolvedParts = []
    } else {
      resolvedParts = currentDir.split('/').filter(Boolean)
    }

    const targetParts = targetPath.split('/').filter(Boolean)
    for (const part of targetParts) {
      if (part === '.') {
        continue
      } else if (part === '..') {
        resolvedParts.pop()
      } else {
        resolvedParts.push(part)
      }
    }

    const path = '/' + resolvedParts.join('/')
    const node = getNodeByPath(path)
    if (node && node.type === 'directory') {
      return path
    }
    return null
  }

  // Command Execution Engine
  const executeCommand = (cmdStr: string, isStartup = false) => {
    const trimmed = cmdStr.trim()
    const args = trimmed.split(/\s+/)
    const commandName = args[0].toLowerCase()
    const commandArg = args.slice(1).join(' ')
    const uniqueId = Math.random().toString(36).substr(2, 9)

    // Add user typed line to history (except on startup simulation)
    if (!isStartup) {
      setLines(prev => [
        ...prev,
        {
          id: `cmd-${uniqueId}`,
          type: 'input',
          dir: currentDir,
          command: trimmed,
          content: ''
        }
      ])
      if (trimmed !== '') {
        setHistory(prev => [...prev, trimmed])
      }
      setHistoryIndex(-1)
    }

    if (trimmed === '') {
      setInputValue('')
      return
    }

    let outputContent: React.ReactNode = ''

    switch (commandName) {
      case 'help':
        outputContent = (
          <div className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-1 text-[#f8f8f2]">
            <span className="text-[#8be9fd] font-bold">help</span>
            <span className="text-[#6272a4]">Show this list of commands</span>
            <span className="text-[#8be9fd] font-bold">ls</span>
            <span className="text-[#6272a4]">List directory contents</span>
            <span className="text-[#8be9fd] font-bold">cd [dir]</span>
            <span className="text-[#6272a4]">Change current working directory</span>
            <span className="text-[#8be9fd] font-bold">cat [file]</span>
            <span className="text-[#6272a4]">View text/markdown file content</span>
            <span className="text-[#8be9fd] font-bold">pwd</span>
            <span className="text-[#6272a4]">Display current path</span>
            <span className="text-[#8be9fd] font-bold">clear</span>
            <span className="text-[#6272a4]">Clear terminal screen</span>
            <span className="text-[#8be9fd] font-bold">whoami</span>
            <span className="text-[#6272a4]">Displays developer description</span>
            <span className="text-[#8be9fd] font-bold">uname</span>
            <span className="text-[#6272a4]">Prints system details</span>
            <span className="text-[#8be9fd] font-bold">lscpu</span>
            <span className="text-[#6272a4]">Prints custom brain micro-architecture</span>
            <span className="text-[#8be9fd] font-bold">neofetch</span>
            <span className="text-[#6272a4]">Show developer system profile</span>
            <span className="text-[#8be9fd] font-bold">history</span>
            <span className="text-[#6272a4]">Display command log</span>
            <span className="text-[#8be9fd] font-bold">tree</span>
            <span className="text-[#6272a4]">Print directories recursively</span>
            <span className="text-[#8be9fd] font-bold">open [file]</span>
            <span className="text-[#6272a4]">Opens a file (e.g. open resume.pdf)</span>
            <span className="text-[#8be9fd] font-bold">exit</span>
            <span className="text-[#6272a4]">Close the terminal simulation</span>
          </div>
        )
        break

      case 'ls': {
        const node = getNodeByPath(currentDir)
        if (node && node.type === 'directory') {
          outputContent = (
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {Object.keys(node.children).sort().map(name => {
                const isDir = node.children[name].type === 'directory'
                return (
                  <span
                    key={name}
                    className={isDir ? 'text-[#8be9fd] font-bold' : 'text-[#f8f8f2]'}
                  >
                    {name}{isDir ? '/' : ''}
                  </span>
                )
              })}
            </div>
          )
        }
        break
      }

      case 'cd': {
        const target = commandArg.trim()
        const targetPath = resolvePath(target)
        if (targetPath) {
          setCurrentDir(targetPath)
        } else {
          // Check if it was a file
          const filePath = currentDir + '/' + target
          const fileNode = getNodeByPath(filePath)
          if (fileNode && fileNode.type === 'file') {
            outputContent = <span className="text-[#ff5555]">cd: not a directory: {target}</span>
          } else {
            outputContent = <span className="text-[#ff5555]">cd: no such file or directory: {target}</span>
          }
        }
        break
      }

      case 'cat': {
        const filename = commandArg.trim()
        if (!filename) {
          outputContent = <span className="text-[#ff5555]">cat: missing operand</span>
          break
        }
        const fileNode = getNodeByPath(currentDir + '/' + filename) || getNodeByPath(filename)
        if (!fileNode) {
          outputContent = <span className="text-[#ff5555]">cat: {filename}: No such file or directory</span>
        } else if (fileNode.type === 'directory') {
          outputContent = <span className="text-[#ff5555]">cat: {filename}: Is a directory</span>
        } else {
          outputContent = (
            <pre className="whitespace-pre-wrap font-mono leading-relaxed text-[#f8f8f2]">
              {fileNode.content}
            </pre>
          )
        }
        break
      }

      case 'pwd':
        outputContent = <span className="text-[#f8f8f2]">{currentDir}</span>
        break

      case 'clear':
        setLines([])
        setInputValue('')
        return

      case 'whoami':
        outputContent = (
          <span className="text-[#f8f8f2] whitespace-pre-wrap leading-relaxed">
            A curious developer passionate about Linux, Backend Engineering,
            <br />
            Cloud Computing, AI Agents, and building scalable systems.
            <br />
            <br />
            Also known as Subash.
          </span>
        )
        break

      case 'uname':
        outputContent = <span className="text-[#f8f8f2]">Linux portfolio 6.8.0-1018-aws #18-Ubuntu SMP Mon Feb 19 18:22:45 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux</span>
        break

      case 'lscpu':
        outputContent = (
          <div className="grid grid-cols-[160px_1fr] gap-x-4 text-[#f8f8f2] font-mono leading-relaxed">
            <span className="text-[#6272a4]">Architecture:</span><span>x86_64</span>
            <span className="text-[#6272a4]">Model name:</span><span>Subash Brain v24.7</span>
            <span className="text-[#6272a4]">Cores:</span><span className="text-[#50fa7b]">Unlimited Curiosity</span>
            <span className="text-[#6272a4]">Threads:</span><span className="text-[#ffb86c]">Always Learning</span>
            <span className="text-[#6272a4]">Cache Size:</span><span className="text-[#bd93f9]">Infinite Coffee Storage</span>
            <span className="text-[#6272a4]">Virtualization:</span><span>Enabled</span>
            <span className="text-[#6272a4]">AI Support:</span><span className="text-[#8be9fd]">Native</span>
          </div>
        )
        break

      case 'neofetch': {
        outputContent = (
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 text-[#f8f8f2] font-mono text-sm leading-relaxed items-center">
            {/* Custom logo */}
            <pre className="text-[#ff79c6] font-bold leading-tight select-none">
{`   /\\
  /  \\
 /\\  /\\
/  \\/  \\
\\  /\\  /
 \\/  \\/
  \\  /
   \\/`}
            </pre>
            {/* Stats */}
            <div className="flex flex-col gap-1">
              <div>
                <span className="text-[#50fa7b] font-bold">subash</span>
                <span className="text-[#f8f8f2]">@</span>
                <span className="text-[#bd93f9] font-bold">portfolio</span>
              </div>
              <div className="text-[#6272a4] font-bold">----------------</div>
              <div><span className="text-[#8be9fd] font-semibold">Name:</span> Subash Tharu</div>
              <div><span className="text-[#8be9fd] font-semibold">Role:</span> Backend Developer</div>
              <div><span className="text-[#8be9fd] font-semibold">Stack:</span> NestJS, Node.js, PostgreSQL, AWS, Docker</div>
              <div><span className="text-[#8be9fd] font-semibold">OS:</span> Arch Linux / Fedora Enthusiast</div>
              <div><span className="text-[#8be9fd] font-semibold">Interests:</span> Linux, Cloud, AI Agents, System Design</div>
              <div><span className="text-[#8be9fd] font-semibold">Uptime:</span> 2.5 Years Professional Exp</div>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-4 h-4 bg-[#282a36] inline-block border border-[#44475a]" />
                <span className="w-4 h-4 bg-[#ff5555] inline-block" />
                <span className="w-4 h-4 bg-[#50fa7b] inline-block" />
                <span className="w-4 h-4 bg-[#f1fa8c] inline-block" />
                <span className="w-4 h-4 bg-[#bd93f9] inline-block" />
                <span className="w-4 h-4 bg-[#ff79c6] inline-block" />
                <span className="w-4 h-4 bg-[#8be9fd] inline-block" />
                <span className="w-4 h-4 bg-[#f8f8f2] inline-block" />
              </div>
            </div>
          </div>
        )
        break
      }

      case 'history':
        outputContent = (
          <div className="flex flex-col font-mono text-[#f8f8f2]">
            {(isStartup ? [...history, 'neofetch'] : history).map((h, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-[#6272a4] w-6 text-right">{i + 1}</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        )
        break

      case 'tree': {
        const node = getNodeByPath(currentDir)
        if (node && node.type === 'directory') {
          const treeLines = formatTree(node)
          const counts = countFileSystem(node)
          const summary = `${counts.dirs} ${counts.dirs === 1 ? 'directory' : 'directories'}, ${counts.files} ${counts.files === 1 ? 'file' : 'files'}`
          outputContent = (
            <pre className="font-mono text-[#f8f8f2] leading-tight">
              {['.', ...treeLines, '', summary].join('\n')}
            </pre>
          )
        }
        break
      }

      case 'open': {
        const fileTarget = commandArg.trim().toLowerCase()
        if (!fileTarget) {
          outputContent = <span className="text-[#ff5555]">open: missing filename</span>
        } else if (fileTarget === 'resume.pdf') {
          outputContent = <span className="text-[#50fa7b]">Opening resume PDF in new tab... 🚀</span>
          if (typeof window !== 'undefined') {
            window.open('/resume.pdf', '_blank')
          }
        } else {
          // Check if exists
          const fileNode = getNodeByPath(currentDir + '/' + commandArg.trim()) || getNodeByPath(commandArg.trim())
          if (fileNode && fileNode.type === 'file') {
            outputContent = (
              <div>
                <span className="text-[#f8f8f2]">Opening file structure contents:</span>
                <pre className="whitespace-pre-wrap font-mono mt-1 text-[#6272a4]">{fileNode.content}</pre>
              </div>
            )
          } else {
            outputContent = <span className="text-[#ff5555]">open: {commandArg.trim()}: No such file or directory</span>
          }
        }
        break
      }

      case 'exit':
        onClose()
        setInputValue('')
        return

      case 'sudo':
        outputContent = (
          <span className="text-[#f8f8f2] font-mono">
            Nice try 😄
            <br />
            <span className="text-[#ff5555]">Root access denied.</span>
          </span>
        )
        break

      case 'hack': {
        // Show hacking progress animation
        const hackingLinesId = `hack-${uniqueId}`
        outputContent = <SimulatedHack id={hackingLinesId} />
        break
      }

      case 'coffee':
        outputContent = (
          <span className="text-[#ffb86c] font-mono whitespace-pre-line">
            Brewing motivation...
            ☕ Ready.
          </span>
        )
        break

      default:
        outputContent = (
          <span className="text-[#ff5555] font-mono">
            su_bash: command not found: {commandName}. Type 'help' for instructions.
          </span>
        )
    }

    if (outputContent !== '') {
      setLines(prev => [
        ...prev,
        {
          id: `out-${uniqueId}`,
          type: 'output',
          content: outputContent
        }
      ])
    }
    setInputValue('')
  }

  // Auto-complete handler
  const handleTabComplete = () => {
    const trimmed = inputValue.trimStart()
    const parts = trimmed.split(/\s+/)
    if (parts.length === 0 || trimmed === '') return

    const commandName = parts[0]

    // Case A: Autocomplete command name
    if (parts.length === 1 && !inputValue.endsWith(' ')) {
      const commands = [
        'help', 'ls', 'cd', 'cat', 'pwd', 'clear', 
        'whoami', 'uname', 'lscpu', 'neofetch', 
        'history', 'tree', 'open', 'exit', 
        'sudo', 'hack', 'coffee'
      ]
      const matches = commands.filter(cmd => cmd.startsWith(commandName))

      if (matches.length === 1) {
        setInputValue(matches[0] + ' ')
      } else if (matches.length > 1) {
        setLines(prev => [
          ...prev,
          {
            id: `tab-${Math.random().toString(36).substr(2, 9)}`,
            type: 'input',
            dir: currentDir,
            command: inputValue,
            content: ''
          },
          {
            id: `tab-out-${Math.random().toString(36).substr(2, 9)}`,
            type: 'output',
            content: <div className="text-[#6272a4] flex flex-wrap gap-4">{matches.map(m => <span key={m}>{m}</span>)}</div>
          }
        ])
      }
      return
    }

    // Case B: Autocomplete directory or file path
    const lastPart = parts[parts.length - 1]
    const commandPrefix = parts.slice(0, -1).join(' ') + ' '

    // Find children in current directory matching lastPart
    const node = getNodeByPath(currentDir)
    if (node && node.type === 'directory') {
      const items = Object.keys(node.children)
      const matches = items.filter(item => item.startsWith(lastPart))

      if (matches.length === 1) {
        const match = matches[0]
        const isDir = node.children[match].type === 'directory'
        setInputValue(commandPrefix + match + (isDir ? '/' : ''))
      } else if (matches.length > 1) {
        setLines(prev => [
          ...prev,
          {
            id: `tab-${Math.random().toString(36).substr(2, 9)}`,
            type: 'input',
            dir: currentDir,
            command: inputValue,
            content: ''
          },
          {
            id: `tab-out-${Math.random().toString(36).substr(2, 9)}`,
            type: 'output',
            content: <div className="text-[#6272a4] flex flex-wrap gap-4">{matches.map(m => <span key={m}>{m}</span>)}</div>
          }
        ])
      }
    }
  }

  // Keyboard navigation & History handlers
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isStartupRunning) {
      e.preventDefault()
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
      handleTabComplete()
    } else if (e.key === 'Enter') {
      executeCommand(inputValue)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return

      let newIndex = historyIndex === -1 ? history.length - 1 : historyIndex - 1
      if (newIndex < 0) newIndex = 0

      setHistoryIndex(newIndex)
      setInputValue(history[newIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return

      const newIndex = historyIndex + 1
      if (newIndex >= history.length) {
        setHistoryIndex(-1)
        setInputValue('')
      } else {
        setHistoryIndex(newIndex)
        setInputValue(history[newIndex])
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-0 md:p-6"
          onClick={focusInput}
        >
          {/* Main Terminal Window */}
          <div
            onClick={(e) => {
              e.stopPropagation()
              focusInput()
            }}
            className={`flex flex-col bg-[#282a36] text-[#f8f8f2] font-mono border border-[#44475a]/50 shadow-2xl transition-all duration-300 ${
              isMaximized
                ? 'w-full h-full md:rounded-none border-none'
                : 'w-full max-w-4xl h-[80vh] rounded-lg'
            }`}
          >
            {/* Terminal Header Bar */}
            <div className="bg-[#191a21] h-10 px-4 flex items-center justify-between text-xs text-[#6272a4] border-b border-[#44475a]/30 select-none md:rounded-t-lg">
              {/* Left dots */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3.5 h-3.5 rounded-full bg-[#ff5555] hover:bg-[#ff5555]/80 flex items-center justify-center group"
                  title="Close (exit)"
                >
                  <X className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={onClose}
                  className="w-3.5 h-3.5 rounded-full bg-[#f1fa8c] hover:bg-[#f1fa8c]/80 flex items-center justify-center group"
                  title="Minimize"
                >
                  <Minus className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-3.5 h-3.5 rounded-full bg-[#50fa7b] hover:bg-[#50fa7b]/80 flex items-center justify-center group"
                  title="Toggle Fullscreen"
                >
                  <Square className="w-1.5 h-1.5 text-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Title */}
              <div className="flex items-center gap-1.5 text-sm tracking-wide text-gray-300 font-semibold">
                <Terminal className="w-4 h-4 text-[#8be9fd]" />
                subash@portfolio: {getPromptPath(currentDir)}
              </div>

              {/* Right text info */}
              <div className="text-[10px] hidden sm:block font-light text-gray-500">
                su_bash (tty/1)
              </div>
            </div>

            {/* Terminal Body */}
            <div
              ref={containerRef}
              onClick={(e) => {
                e.stopPropagation()
                focusInput()
              }}
              className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 text-sm md:text-base leading-relaxed scrollbar-thin scrollbar-thumb-[#44475a] scrollbar-track-[#1e1f29] selection:bg-[#44475a] select-text cursor-text"
            >
              {/* Lines Log */}
              <TerminalLog lines={lines} getPromptPath={getPromptPath} />

              {/* Typing Line Prompt (Active Prompt) */}
              {!isStartupRunning && (
                <div className="flex items-start gap-1 sm:gap-2">
                  <div className="flex items-center flex-shrink-0 select-none">
                    <span className="text-[#50fa7b] font-bold">subash</span>
                    <span className="text-[#f8f8f2]">@</span>
                    <span className="text-[#bd93f9] font-bold">portfolio</span>
                    <span className="text-[#f8f8f2]">:</span>
                    <span className="text-[#8be9fd] font-semibold">
                      {getPromptPath(currentDir)}
                    </span>
                    <span className="text-[#f8f8f2] ml-1">$</span>
                  </div>
                  <div className="relative flex-1 min-w-0 ml-1.5 flex items-center">
                    <span className="text-[#f8f8f2] break-all whitespace-pre-wrap">
                      {inputValue}
                    </span>
                    {/* Blinking Cursor */}
                    {isFocused ? (
                      <span className="terminal-cursor-blink select-none ml-0.5 text-[#f8f8f2] font-mono leading-none">█</span>
                    ) : (
                      <span className="select-none ml-0.5 text-[#6272a4] font-mono leading-none">█</span>
                    )}
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-text select-text z-10"
                      autoComplete="one-time-code"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck="false"
                      name="su-bash-input-field"
                      data-lpignore="true"
                      data-1pignore="true"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Simulated hack process with incremental percentage updates
const SimulatedHack: React.FC<{ id: string }> = () => {
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState<'accessing' | 'progress' | 'done'>('accessing')

  useEffect(() => {
    // Step 1: Accessing NASA servers
    const timer1 = setTimeout(() => {
      setStep('progress')
    }, 800)

    return () => clearTimeout(timer1)
  }, [])

  useEffect(() => {
    if (step !== 'progress') return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setStep('done')
          }, 400)
          return 100
        }
        return prev + 10
      })
    }, 150)

    return () => clearInterval(interval)
  }, [step])

  const barWidth = Math.round(progress / 5)
  const filledBar = '█'.repeat(barWidth)
  const emptyBar = '░'.repeat(20 - barWidth)

  return (
    <div className="font-mono text-sm leading-relaxed">
      {step === 'accessing' && (
        <span className="text-[#bd93f9]">Accessing NASA servers...</span>
      )}
      {step === 'progress' && (
        <div>
          <span className="text-[#bd93f9]">Accessing NASA servers...</span>
          <div className="text-[#f1fa8c] mt-1">
            [{filledBar}{emptyBar}] {progress}%
          </div>
        </div>
      )}
      {step === 'done' && (
        <div>
          <span className="text-[#bd93f9]">Accessing NASA servers...</span>
          <div className="text-[#f1fa8c] mt-1">
            [████████████████████] 100%
          </div>
          <div className="text-[#50fa7b] font-bold mt-2">
            Just kidding 🚀
          </div>
        </div>
      )}
    </div>
  )
}

const TerminalLog = React.memo(({ lines, getPromptPath }: { lines: TerminalLine[], getPromptPath: (path: string) => string }) => {
  return (
    <>
      {lines.map((line) => {
        if (line.type === 'input') {
          return (
            <div key={line.id} className="flex items-start gap-1 sm:gap-2">
              <div className="flex items-center flex-shrink-0 select-none">
                <span className="text-[#50fa7b] font-bold">subash</span>
                <span className="text-[#f8f8f2]">@</span>
                <span className="text-[#bd93f9] font-bold">portfolio</span>
                <span className="text-[#f8f8f2]">:</span>
                <span className="text-[#8be9fd] font-semibold">
                  {getPromptPath(line.dir || '')}
                </span>
                <span className="text-[#f8f8f2] ml-1">$</span>
              </div>
              <div className="text-[#f8f8f2] break-all whitespace-pre-wrap ml-1.5">
                {line.command}
              </div>
            </div>
          )
        } else {
          return (
            <div key={line.id} className="whitespace-pre-wrap">
              {line.content}
            </div>
          )
        }
      })}
    </>
  )
})
TerminalLog.displayName = 'TerminalLog'
