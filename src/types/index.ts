export interface Scene {
  id: string;
  number: number;
  title: string;
  duration: number;
  prompt: string;
  thumbnail?: string;
  status: 'idle' | 'generating' | 'complete' | 'failed';
  videoUrl?: string;
  createdAt: number;
}

export interface Project {
  id: string;
  name: string;
  scenes: Scene[];
  currentSceneId?: string;
  createdAt: number;
  updatedAt: number;
}

export interface AIGenerationParams {
  prompt: string;
  model: string;
  aspectRatio: string;
  duration: number;
  resolution: string;
  camera: string;
  cameraMotion: string;
  motionStrength: number;
  style: string;
  seed?: number;
  references?: {
    image?: File;
    video?: File;
    character?: File;
  };
}

export interface GenerationResult {
  id: string;
  videoUrl: string;
  status: 'generating' | 'complete' | 'failed';
  progress: number;
  error?: string;
}

export type AIModel = 'demo' | 'runway' | 'pika' | 'luma' | 'opensora';

export interface TimelineClip {
  id: string;
  sceneId: string;
  type: 'video' | 'overlay' | 'voice' | 'music' | 'sfx';
  startTime: number;
  duration: number;
  track: number;
  url?: string;
}
