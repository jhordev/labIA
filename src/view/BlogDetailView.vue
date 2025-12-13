<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const showContent = ref(false);

// Base de datos completa de posts (misma que en BlogView)
const posts = ref([
  {
    id: 1,
    title: 'El Futuro de la IA Generativa',
    excerpt: 'Exploramos cómo los modelos de lenguaje grandes están transformando la creación de contenido y la programación.',
    content: `La inteligencia artificial generativa está revolucionando la forma en que creamos contenido, desarrollamos software y resolvemos problemas complejos. En este artículo, exploramos las tendencias más importantes y el impacto futuro de esta tecnología.`,
    fullContent: [
      {
        type: 'text',
        content: 'La inteligencia artificial generativa ha experimentado un crecimiento exponencial en los últimos años, transformando radicalmente múltiples industrias. Desde la creación de contenido hasta el desarrollo de software, los modelos de lenguaje grandes (LLMs) están redefiniendo lo que es posible en el campo de la IA.'
      },
      {
        type: 'heading',
        content: 'La Revolución de los Modelos de Lenguaje'
      },
      {
        type: 'text',
        content: 'Los modelos como GPT-4, Claude, y otros LLMs de última generación han demostrado capacidades sorprendentes en tareas que van desde la generación de código hasta la creación de contenido creativo. Estos modelos no solo comprenden el lenguaje natural con una precisión sin precedentes, sino que también pueden razonar, planificar y resolver problemas complejos.'
      },
      {
        type: 'image',
        src: 'https://placehold.co/1200x600/1a1a1a/orange?text=LLM+Architecture',
        alt: 'Arquitectura de Modelos de Lenguaje Grande',
        caption: 'Visualización de la arquitectura transformer utilizada en LLMs modernos'
      },
      {
        type: 'heading',
        content: 'Aplicaciones Prácticas en la Industria'
      },
      {
        type: 'text',
        content: 'Las aplicaciones de la IA generativa se extienden a numerosos sectores:'
      },
      {
        type: 'list',
        items: [
          'Desarrollo de software: Asistentes de código que mejoran la productividad',
          'Creación de contenido: Generación automática de artículos, guiones y material educativo',
          'Diseño y arte: Creación de imágenes, música y diseños originales',
          'Atención al cliente: Chatbots inteligentes que proporcionan soporte 24/7',
          'Investigación científica: Aceleración del descubrimiento de fármacos y análisis de datos'
        ]
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/aircAruvnKk',
        title: 'Introducción a las Redes Neuronales',
        caption: 'Video educativo sobre los fundamentos de las redes neuronales'
      },
      {
        type: 'heading',
        content: 'Desafíos y Consideraciones Éticas'
      },
      {
        type: 'text',
        content: 'A pesar de su potencial, la IA generativa también presenta desafíos significativos. La desinformación, el sesgo algorítmico, y las preocupaciones sobre derechos de autor son temas críticos que la industria debe abordar. Es fundamental desarrollar marcos éticos robustos y regulaciones apropiadas para garantizar el uso responsable de estas tecnologías.'
      },
      {
        type: 'quote',
        content: 'La IA generativa no reemplazará a los humanos, pero los humanos que usan IA generativa reemplazarán a los que no lo hacen.',
        author: 'Dr. Andrew Ng'
      },
      {
        type: 'heading',
        content: 'El Futuro: Modelos Multimodales'
      },
      {
        type: 'text',
        content: 'La próxima frontera de la IA generativa son los modelos multimodales, capaces de procesar y generar contenido en múltiples formatos: texto, imagen, audio y video simultáneamente. Esta convergencia abrirá nuevas posibilidades en educación, entretenimiento y comunicación.'
      },
      {
        type: 'code',
        language: 'python',
        content: `# Ejemplo de uso de un LLM con LangChain
from langchain import OpenAI, LLMChain, PromptTemplate

# Inicializar el modelo
llm = OpenAI(temperature=0.7)

# Crear un template de prompt
template = """
Eres un asistente experto en IA generativa.
Pregunta: {question}
Respuesta detallada:
"""

prompt = PromptTemplate(template=template, input_variables=["question"])
chain = LLMChain(llm=llm, prompt=prompt)

# Ejecutar la cadena
response = chain.run(question="¿Cómo funcionan los transformers?")
print(response)`,
        caption: 'Ejemplo de implementación de un LLM con LangChain'
      },
      {
        type: 'text',
        content: 'A medida que continuamos explorando las capacidades de la IA generativa, es crucial mantener un equilibrio entre innovación y responsabilidad. El futuro promete avances extraordinarios, pero depende de nosotros asegurar que estos desarrollos beneficien a toda la humanidad.'
      }
    ],
    date: '10 Dic, 2024',
    author: {
      name: 'Anónimo',
      role: 'Colaborador',
      avatar: 'https://ui-avatars.com/api/?name=Anonimo&background=FF7A01&color=fff',
      bio: 'Colaborador del laboratorio de IA especializado en inteligencia artificial generativa y modelos de lenguaje.'
    },
    category: 'IA Generativa',
    tags: ['GPT-4', 'LLMs', 'Creatividad'],
    readTime: '5 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=Generative+AI',
    featured: true,
    views: 1250
  },
  {
    id: 2,
    title: 'Ética en la Inteligencia Artificial: Desafíos y Responsabilidades',
    excerpt: 'Un análisis exhaustivo sobre los desafíos éticos fundamentales que enfrentamos al diseñar, desarrollar e implementar sistemas de IA en nuestra sociedad moderna.',
    content: 'La Inteligencia Artificial plantea dilemas éticos cruciales que debemos abordar como sociedad. El sesgo algorítmico, la privacidad, la transparencia y el impacto laboral son temas que requieren atención urgente.',
    fullContent: [
      {
        type: 'text',
        content: 'La Inteligencia Artificial está transformando cada aspecto de nuestra vida cotidiana, desde cómo trabajamos hasta cómo nos relacionamos. Sin embargo, este poder tecnológico sin precedentes viene acompañado de responsabilidades éticas que no podemos ignorar. Los dilemas que enfrentamos hoy definirán el tipo de sociedad que construiremos mañana.'
      },
      {
        type: 'heading',
        content: 'El Sesgo Algorítmico: Cuando la IA Hereda Nuestros Prejuicios'
      },
      {
        type: 'text',
        content: 'Uno de los problemas más graves de la IA moderna es el sesgo algorítmico. Los modelos de machine learning aprenden de datos históricos que frecuentemente contienen sesgos raciales, de género y socioeconómicos. Cuando estos sistemas se utilizan para decisiones críticas como contratación laboral, aprobación de créditos bancarios, sentencias judiciales o diagnósticos médicos, pueden perpetuar y amplificar discriminaciones históricas.'
      },
      {
        type: 'list',
        items: [
          'Sistemas de reclutamiento que penalizan currículums con nombres asociados a minorías',
          'Algoritmos de crédito que discriminan a solicitantes de códigos postales de bajos ingresos',
          'Software de reconocimiento facial con tasas de error significativamente mayores para personas de piel oscura',
          'Modelos de riesgo criminal que asignan puntuaciones más altas a grupos étnicos minoritarios',
          'Sistemas de salud que subestiman las necesidades médicas de poblaciones históricamente marginadas'
        ]
      },
      {
        type: 'image',
        src: 'https://placehold.co/1200x600/1a1a1a/orange?text=Algorithmic+Bias',
        alt: 'Sesgo Algorítmico en IA',
        caption: 'El sesgo en los datos de entrenamiento se amplifica en las predicciones del modelo'
      },
      {
        type: 'heading',
        content: 'Privacidad en la Era de los Datos Masivos'
      },
      {
        type: 'text',
        content: 'Los modelos de IA modernos, especialmente los Large Language Models (LLMs), requieren cantidades masivas de datos para su entrenamiento. Esto plantea preguntas fundamentales: ¿Quién posee estos datos? ¿Se obtuvo consentimiento informado? ¿Cómo se protege la información sensible? ¿Qué sucede cuando los modelos memorizan datos personales?'
      },
      {
        type: 'text',
        content: 'El Reglamento General de Protección de Datos (GDPR) de la Unión Europea estableció un precedente importante al definir el "derecho al olvido" y exigir consentimiento explícito para el procesamiento de datos. Sin embargo, aplicar estos principios a sistemas de IA que aprenden de billones de parámetros presenta desafíos técnicos sin resolver.'
      },
      {
        type: 'quote',
        content: 'La privacidad no es sobre tener algo que ocultar, sino sobre tener algo que proteger: nuestra dignidad humana, nuestra autonomía y nuestra libertad de ser quienes elegimos ser sin vigilancia constante.',
        author: 'Organización de Derechos Digitales'
      },
      {
        type: 'heading',
        content: 'Transparencia y Explicabilidad: El Problema de la Caja Negra'
      },
      {
        type: 'text',
        content: 'Los modelos de deep learning más avanzados funcionan como "cajas negras": producen resultados altamente precisos, pero sus procesos de decisión son incomprensibles incluso para sus creadores. Cuando una IA niega un préstamo hipotecario, rechaza una solicitud de asilo político, o recomienda un tratamiento médico, las personas afectadas tienen derecho a entender por qué.'
      },
      {
        type: 'text',
        content: 'El campo de la IA Explicable (XAI - Explainable AI) busca desarrollar técnicas que permitan interpretar las decisiones de modelos complejos. Métodos como LIME (Local Interpretable Model-agnostic Explanations) y SHAP (SHapley Additive exPlanations) ofrecen aproximaciones, pero aún estamos lejos de una transparencia verdadera en sistemas con miles de millones de parámetros.'
      },
      {
        type: 'code',
        language: 'python',
        content: `# Ejemplo de uso de SHAP para explicabilidad
import shap
import xgboost as xgb

# Entrenar modelo
model = xgb.XGBClassifier()
model.fit(X_train, y_train)

# Crear explicador SHAP
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Visualizar importancia de características
shap.summary_plot(shap_values, X_test, feature_names=feature_names)

# Explicar una predicción individual
shap.force_plot(explainer.expected_value, 
                shap_values[0], 
                X_test[0],
                feature_names=feature_names)`,
        caption: 'Implementación de SHAP para explicar predicciones de modelos de ML'
      },
      {
        type: 'heading',
        content: 'El Futuro del Trabajo: Automatización y Responsabilidad Social'
      },
      {
        type: 'text',
        content: 'La automatización impulsada por IA transformará radicalmente el mercado laboral. Según estudios del Foro Económico Mundial, para 2030 la IA podría desplazar 85 millones de empleos, pero también crear 97 millones de nuevos roles. La pregunta ética no es si la automatización ocurrirá, sino cómo garantizar una transición justa que no abandone a trabajadores vulnerables.'
      },
      {
        type: 'list',
        items: [
          'Programas de reentrenamiento y educación continua financiados por empresas tecnológicas',
          'Renta básica universal o dividendos tecnológicos para distribuir beneficios de la automatización',
          'Políticas de transición gradual que protejan a trabajadores de sectores afectados',
          'Inversión en empleos que la IA no puede replicar: cuidado, creatividad, liderazgo',
          'Regulación de velocidad de adopción de IA en sectores sensibles'
        ]
      },
      {
        type: 'heading',
        content: 'Deepfakes y Desinformación: Amenazas a la Verdad'
      },
      {
        type: 'text',
        content: 'La IA generativa ha democratizado la creación de contenido sintético hiperrealista. Los deepfakes pueden fabricar videos de líderes políticos diciendo cosas que nunca dijeron, crear evidencia falsa para fraudes, o producir material íntimo no consentido. En un mundo donde "ver ya no es creer", la confianza en la información se erosiona peligrosamente.'
      },
      {
        type: 'image',
        src: 'https://placehold.co/1200x600/1a1a1a/orange?text=Deepfakes+Detection',
        alt: 'Detección de Deepfakes',
        caption: 'Técnicas de detección de contenido sintético generado por IA'
      },
      {
        type: 'heading',
        content: 'Hacia una Regulación Global de la IA'
      },
      {
        type: 'text',
        content: 'La Unión Europea lideró con el AI Act, la primera regulación integral de inteligencia artificial del mundo. Esta legislación clasifica sistemas de IA por nivel de riesgo y prohíbe aplicaciones como la vigilancia masiva biométrica o el scoring social. Sin embargo, la naturaleza global de la tecnología exige cooperación internacional para evitar que empresas simplemente trasladen operaciones a jurisdicciones menos reguladas.'
      },
      {
        type: 'quote',
        content: 'La ética en IA no es un obstáculo para la innovación, sino la brújula que nos guía hacia un desarrollo tecnológico que genuinamente beneficie a toda la humanidad, no solo a unos pocos privilegiados.',
        author: 'Comité de Ética en Inteligencia Artificial'
      },
      {
        type: 'text',
        content: 'El futuro de la IA ética depende de un esfuerzo colectivo: investigadores que prioricen la seguridad, empresas que adopten principios de diseño responsable, gobiernos que regulen sin sofocar la innovación, y ciudadanos informados que exijan accountability. La tecnología más poderosa de la historia humana requiere la gobernanza más sabia.'
      }
    ],
    date: '05 Dic, 2024',
    author: {
      name: 'Anónimo',
      role: 'Colaborador',
      avatar: 'https://ui-avatars.com/api/?name=Anonimo&background=FF7A01&color=fff',
      bio: 'Colaborador del laboratorio de IA con interés en los aspectos éticos y sociales de la inteligencia artificial.'
    },
    category: 'Ética',
    tags: ['Ética', 'Privacidad', 'Regulación', 'Sesgo Algorítmico', 'GDPR'],
    readTime: '12 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=AI+Ethics',
    featured: false,
    views: 980
  },
  {
    id: 3,
    title: 'Visión por Computadora en la Industria 4.0: Transformando la Manufactura',
    excerpt: 'Descubre cómo la visión por computadora revoluciona los procesos industriales: desde la detección automática de defectos hasta sistemas de seguridad predictiva y mantenimiento inteligente.',
    content: 'La visión por computadora se ha convertido en un pilar fundamental de la Industria 4.0, transformando radicalmente los procesos de manufactura, control de calidad y seguridad industrial.',
    fullContent: [
      {
        type: 'text',
        content: 'La Industria 4.0 representa la cuarta revolución industrial, caracterizada por la integración de tecnologías digitales avanzadas en los procesos de manufactura. En el corazón de esta transformación se encuentra la visión por computadora: sistemas capaces de "ver" y comprender el mundo visual con una precisión y velocidad imposibles para el ojo humano.'
      },
      {
        type: 'heading',
        content: 'Detección de Defectos en Tiempo Real'
      },
      {
        type: 'text',
        content: 'Las líneas de producción modernas operan a velocidades vertiginosas donde la inspección manual es físicamente imposible. Un sistema de visión por computadora equipado con cámaras de alta resolución y algoritmos de deep learning puede analizar miles de productos por minuto, detectando defectos microscópicos con precisiones superiores al 99.5%.'
      },
      {
        type: 'list',
        items: [
          'Detección de micro-fisuras en componentes metálicos y cerámicos',
          'Identificación de decoloraciones y manchas en productos textiles y plásticos',
          'Verificación dimensional con tolerancias de micrómetros',
          'Inspección de soldaduras y uniones en ensamblajes electrónicos',
          'Control de etiquetado y empaquetado en líneas de productos de consumo',
          'Detección de contaminantes en productos alimentarios y farmacéuticos'
        ]
      },
      {
        type: 'image',
        src: 'https://placehold.co/1200x600/1a1a1a/orange?text=Defect+Detection',
        alt: 'Sistema de Detección de Defectos',
        caption: 'Sistema de inspección visual automatizada identificando defectos en una línea de producción'
      },
      {
        type: 'heading',
        content: 'YOLO: Detección de Objetos en Tiempo Real'
      },
      {
        type: 'text',
        content: 'YOLO (You Only Look Once) revolucionó la detección de objetos al procesar imágenes completas en una sola pasada de red neuronal, logrando velocidades de procesamiento de hasta 155 frames por segundo. Esta arquitectura es ideal para aplicaciones industriales que requieren respuestas en milisegundos.'
      },
      {
        type: 'code',
        language: 'python',
        content: `# Implementación de YOLO para detección de defectos industriales
from ultralytics import YOLO
import cv2

# Cargar modelo YOLO entrenado para detección de defectos
model = YOLO('defects_model.pt')

# Inicializar cámara industrial
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Realizar detección
    results = model(frame, conf=0.7)
    
    # Procesar resultados
    for result in results:
        boxes = result.boxes
        for box in boxes:
            # Obtener coordenadas y clase
            x1, y1, x2, y2 = box.xyxy[0]
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            
            # Clasificar tipo de defecto
            defect_type = model.names[cls]
            
            # Marcar defecto en imagen
            cv2.rectangle(frame, (int(x1), int(y1)), 
                         (int(x2), int(y2)), (0, 0, 255), 2)
            cv2.putText(frame, f'{defect_type}: {conf:.2f}', 
                       (int(x1), int(y1)-10),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
            
            # Activar alarma si se detecta defecto crítico
            if defect_type in ['crack', 'deformation']:
                trigger_rejection_system()
    
    cv2.imshow('Quality Control', frame)`,
        caption: 'Código de implementación de YOLO para control de calidad en tiempo real'
      },
      {
        type: 'heading',
        content: 'Control de Calidad con Redes Neuronales Convolucionales'
      },
      {
        type: 'text',
        content: 'Las Redes Neuronales Convolucionales (CNN) han transformado el control de calidad industrial. Arquitecturas como ResNet, EfficientNet y Vision Transformers pueden clasificar productos como "conforme" o "defectuoso" con precisiones que superan a inspectores humanos experimentados, manteniendo consistencia durante turnos de 24 horas sin fatiga.'
      },
      {
        type: 'text',
        content: 'El proceso típico incluye: captura de imagen con iluminación controlada, preprocesamiento para normalización, inferencia con modelo entrenado, y decisión automática de aceptar o rechazar. Los sistemas más avanzados también clasifican el tipo específico de defecto y registran estadísticas para análisis de causas raíz.'
      },
      {
        type: 'image',
        src: 'https://placehold.co/1200x600/1a1a1a/orange?text=CNN+Quality+Control',
        alt: 'Control de Calidad con CNN',
        caption: 'Arquitectura de red neuronal convolucional para clasificación de defectos'
      },
      {
        type: 'heading',
        content: 'Seguridad Industrial Inteligente'
      },
      {
        type: 'text',
        content: 'La visión por computadora protege a los trabajadores mediante sistemas de vigilancia inteligente que van más allá de la simple grabación de video. Estos sistemas detectan situaciones de riesgo en tiempo real y pueden activar alertas o detener maquinaria automáticamente.'
      },
      {
        type: 'list',
        items: [
          'Detección de trabajadores sin equipos de protección personal (cascos, guantes, gafas)',
          'Identificación de intrusiones en zonas de operación de maquinaria pesada',
          'Análisis de posturas para prevenir lesiones ergonómicas',
          'Detección de derrames de sustancias peligrosas',
          'Monitoreo de fatiga y distracción en operadores de vehículos industriales',
          'Alertas automáticas ante comportamientos de riesgo como uso de celular en zonas prohibidas'
        ]
      },
      {
        type: 'quote',
        content: 'La visión por computadora no reemplaza la responsabilidad humana en seguridad industrial, pero proporciona una capa adicional de protección que nunca se distrae, nunca se fatiga y procesa información a velocidades sobrehumanas.',
        author: 'Instituto de Seguridad Industrial'
      },
      {
        type: 'heading',
        content: 'Mantenimiento Predictivo Visual'
      },
      {
        type: 'text',
        content: 'El mantenimiento tradicional oscila entre dos extremos costosos: mantenimiento correctivo (reparar cuando falla, causando paros no planificados) y mantenimiento preventivo (reemplazar componentes por calendario, desperdiciando vida útil). El mantenimiento predictivo basado en visión artificial optimiza este balance.'
      },
      {
        type: 'text',
        content: 'Cámaras térmicas detectan puntos calientes que indican fricción excesiva, sobrecarga eléctrica o fallas inminentes en rodamientos. Cámaras de alta velocidad capturan vibraciones anómalas en maquinaria rotativa. Sistemas de inspección visual periódica detectan corrosión, desgaste y deterioro antes de que comprometan la operación.'
      },
      {
        type: 'code',
        language: 'python',
        content: `# Análisis de imágenes térmicas para mantenimiento predictivo
import cv2
import numpy as np
from thermal_analyzer import ThermalProcessor

# Cargar imagen térmica de equipo industrial
thermal_image = cv2.imread('motor_thermal.jpg', cv2.IMREAD_ANYDEPTH)

# Convertir a temperaturas calibradas
processor = ThermalProcessor(calibration_file='camera_cal.json')
temp_matrix = processor.to_celsius(thermal_image)

# Definir umbrales de alerta
NORMAL_TEMP = 60  # °C
WARNING_TEMP = 75
CRITICAL_TEMP = 90

# Detectar puntos calientes
hotspots = np.where(temp_matrix > WARNING_TEMP)
critical_zones = np.where(temp_matrix > CRITICAL_TEMP)

# Generar reporte de mantenimiento
if len(critical_zones[0]) > 0:
    max_temp = temp_matrix.max()
    print(f"⚠️ ALERTA CRÍTICA: Temperatura máxima {max_temp:.1f}°C")
    print("Acción requerida: Programar mantenimiento inmediato")
    schedule_maintenance(priority='urgent', equipment_id='MOTOR-001')
elif len(hotspots[0]) > 0:
    print("⚡ Advertencia: Puntos calientes detectados")
    print("Acción requerida: Inspección en próximo turno de mantenimiento")
    log_anomaly(equipment_id='MOTOR-001', type='thermal_warning')`,
        caption: 'Sistema de análisis térmico para detección temprana de fallas en equipos'
      },
      {
        type: 'heading',
        content: 'OpenCV: La Columna Vertebral de la Visión Industrial'
      },
      {
        type: 'text',
        content: 'OpenCV (Open Source Computer Vision Library) es la biblioteca más utilizada para procesamiento de imágenes en aplicaciones industriales. Con más de 2,500 algoritmos optimizados, OpenCV proporciona herramientas para calibración de cámaras, detección de bordes, transformaciones geométricas, segmentación, y mucho más.'
      },
      {
        type: 'code',
        language: 'python',
        content: `# Pipeline de preprocesamiento con OpenCV
import cv2
import numpy as np

def preprocess_industrial_image(image_path):
    """
    Pipeline de preprocesamiento para inspección industrial
    """
    # Cargar imagen
    img = cv2.imread(image_path)
    
    # Corrección de iluminación
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8))
    l = clahe.apply(l)
    img_corrected = cv2.merge([l, a, b])
    img_corrected = cv2.cvtColor(img_corrected, cv2.COLOR_LAB2BGR)
    
    # Reducción de ruido
    img_denoised = cv2.fastNlMeansDenoisingColored(img_corrected)
    
    # Detección de bordes para análisis de geometría
    gray = cv2.cvtColor(img_denoised, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 50, 150)
    
    # Detección de contornos
    contours, hierarchy = cv2.findContours(
        edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
    )
    
    # Análisis dimensional
    for contour in contours:
        area = cv2.contourArea(contour)
        perimeter = cv2.arcLength(contour, True)
        if area > 100:  # Filtrar ruido
            x, y, w, h = cv2.boundingRect(contour)
            aspect_ratio = w / h
            # Registrar métricas para control estadístico
            log_dimensional_data(area, perimeter, aspect_ratio)
    
    return img_denoised, edges, contours`,
        caption: 'Pipeline completo de preprocesamiento de imágenes industriales con OpenCV'
      },
      {
        type: 'heading',
        content: 'Edge Computing: Procesamiento en el Punto de Captura'
      },
      {
        type: 'text',
        content: 'Las aplicaciones industriales críticas no pueden depender de latencia de red hacia servidores en la nube. El edge computing coloca el poder de procesamiento directamente en la línea de producción mediante dispositivos como NVIDIA Jetson, Intel NCS, o Google Coral. Estos sistemas procesan imágenes localmente con latencias de milisegundos.'
      },
      {
        type: 'image',
        src: 'https://placehold.co/1200x600/1a1a1a/orange?text=Edge+Computing+Industrial',
        alt: 'Edge Computing Industrial',
        caption: 'Arquitectura de edge computing para visión industrial en tiempo real'
      },
      {
        type: 'heading',
        content: 'El Futuro: Visión 3D y Realidad Aumentada Industrial'
      },
      {
        type: 'text',
        content: 'La próxima frontera de la visión industrial incluye sistemas 3D basados en LiDAR, cámaras de tiempo de vuelo (ToF), y visión estéreo. Estos sistemas capturan información tridimensional que permite mediciones volumétricas, detección de deformaciones, y guiado preciso de robots industriales.'
      },
      {
        type: 'text',
        content: 'La realidad aumentada industrial combina visión por computadora con displays heads-up para guiar a operadores en tareas de ensamblaje complejo, mantenimiento, y control de calidad. El operador ve instrucciones superpuestas en tiempo real sobre los componentes físicos, reduciendo errores y tiempos de capacitación.'
      },
      {
        type: 'quote',
        content: 'La visión por computadora es los ojos de la fábrica inteligente. Sin ella, la Industria 4.0 sería ciega. Con ella, cada producto, cada proceso, cada riesgo es visible, medible y optimizable.',
        author: 'Consorcio de Manufactura Inteligente'
      },
      {
        type: 'text',
        content: 'La democratización de estas tecnologías, impulsada por frameworks open source como OpenCV, TensorFlow y PyTorch, junto con hardware cada vez más accesible, está llevando la visión por computadora de las grandes corporaciones a pequeñas y medianas empresas. La fábrica del futuro no es solo automatizada: es inteligente, adaptativa y capaz de ver y entender su entorno.'
      }
    ],
    date: '28 Nov, 2024',
    author: {
      name: 'Anónimo',
      role: 'Colaborador',
      avatar: 'https://ui-avatars.com/api/?name=Anonimo&background=FF7A01&color=fff',
      bio: 'Colaborador del laboratorio de IA especializado en aplicaciones industriales de visión por computadora y sistemas de inspección automatizada.'
    },
    category: 'Computer Vision',
    tags: ['YOLO', 'OpenCV', 'Industria 4.0', 'Control de Calidad', 'Deep Learning'],
    readTime: '10 min',
    image: 'https://placehold.co/800x400/1a1a1a/orange?text=Computer+Vision',
    featured: false,
    views: 756
  }
]);

// Obtener el post actual basado en el ID de la ruta
const currentPost = computed(() => {
  const id = parseInt(route.params.id);
  return posts.value.find(p => p.id === id);
});

// Posts relacionados (excluir el actual)
const relatedPosts = computed(() => {
  if (!currentPost.value) return [];
  return posts.value
    .filter(p => p.id !== currentPost.value.id && p.category === currentPost.value.category)
    .slice(0, 3);
});

const goBack = () => {
  router.push({ name: 'Blog' });
};

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 100);
});
</script>

<template>
  <div v-if="currentPost" class="relative">
    <!-- Blobs decorativos -->
    <div :class="[
      'hidden md:block bg-primary w-72 h-72 rounded-full blur-[150px] absolute left-[5%] top-10 transition-all duration-1000 ease-out',
      showContent ? 'opacity-100' : 'opacity-0'
    ]"></div>
    <div :class="[
      'hidden md:block bg-orange-600 w-56 h-56 rounded-full blur-[130px] absolute right-[10%] top-[60%] transition-all duration-1000 ease-out delay-300',
      showContent ? 'opacity-100' : 'opacity-0'
    ]"></div>

    <div class="max-w-[960px] mx-auto mt-10 md:mt-[90px] px-4 pb-20 relative z-10">
      <!-- Back Button -->
      <button @click="goBack" :class="[
        'group mb-8 flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      ]">
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="font-medium">Volver al Blog</span>
      </button>

      <!-- Hero Image -->
      <div :class="[
        'relative rounded-3xl overflow-hidden mb-8 transition-all duration-800 ease-out',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]" style="transition-delay: 100ms">
        <div class="aspect-[21/9] w-full relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <img :src="currentPost.image" :alt="currentPost.title" class="w-full h-full object-cover" />

          <!-- Category Badge -->
          <div class="absolute top-6 left-6 z-20">
            <span
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-400 text-sm font-semibold">
              {{ currentPost.category }}
            </span>
          </div>
        </div>
      </div>

      <!-- Article Header -->
      <article :class="[
        'transition-all duration-800 ease-out',
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]" style="transition-delay: 200ms">
        <!-- Title -->
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          {{ currentPost.title }}
        </h1>

        <!-- Excerpt -->
        <p class="text-xl text-gray-400 mb-8 leading-relaxed">
          {{ currentPost.excerpt }}
        </p>

        <!-- Meta Info -->
        <div class="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-white/10">
          <!-- Author -->
          <div class="flex items-center gap-3">
            <img :src="currentPost.author.avatar" :alt="currentPost.author.name"
              class="w-12 h-12 rounded-full border-2 border-orange-500" />
            <div>
              <p class="text-white font-semibold">{{ currentPost.author.name }}</p>
              <p class="text-sm text-gray-500">{{ currentPost.author.role }}</p>
            </div>
          </div>

          <div class="hidden sm:block h-8 w-px bg-white/10"></div>

          <!-- Date -->
          <div class="flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-sm">{{ currentPost.date }}</span>
          </div>

          <!-- Read Time -->
          <div class="flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm">{{ currentPost.readTime }} lectura</span>
          </div>

          <!-- Views -->
          <div class="flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span class="text-sm">{{ currentPost.views }} vistas</span>
          </div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-12">
          <span v-for="tag in currentPost.tags" :key="tag"
            class="px-3 py-1.5 rounded-lg bg-white/5 text-orange-400 border border-orange-500/20 text-sm font-medium hover:bg-white/10 transition-colors">
            #{{ tag }}
          </span>
        </div>

        <!-- Article Content -->
        <div class="prose prose-invert prose-lg max-w-none">
          <template v-for="(block, index) in currentPost.fullContent" :key="index">
            <!-- Text Block -->
            <p v-if="block.type === 'text'" class="text-gray-300 leading-relaxed mb-6">
              {{ block.content }}
            </p>

            <!-- Heading Block -->
            <h2 v-else-if="block.type === 'heading'" class="text-3xl font-bold text-white mt-12 mb-6 tracking-tight">
              {{ block.content }}
            </h2>

            <!-- Image Block -->
            <figure v-else-if="block.type === 'image'" class="my-10">
              <div
                class="rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-4">
                <img :src="block.src" :alt="block.alt" class="w-full h-auto rounded-xl" />
              </div>
              <figcaption v-if="block.caption" class="text-center text-sm text-gray-500 mt-4">
                {{ block.caption }}
              </figcaption>
            </figure>

            <!-- Video Block -->
            <figure v-else-if="block.type === 'video'" class="my-10">
              <div
                class="rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-4">
                <div class="aspect-video rounded-xl overflow-hidden">
                  <iframe :src="block.src" :title="block.title" class="w-full h-full" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
              <figcaption v-if="block.caption" class="text-center text-sm text-gray-500 mt-4">
                {{ block.caption }}
              </figcaption>
            </figure>

            <!-- List Block -->
            <ul v-else-if="block.type === 'list'" class="space-y-3 mb-6 ml-6">
              <li v-for="(item, i) in block.items" :key="i" class="text-gray-300 flex items-start gap-3">
                <svg class="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>

            <!-- Quote Block -->
            <blockquote v-else-if="block.type === 'quote'"
              class="my-10 p-6 border-l-4 border-orange-500 bg-gradient-to-r from-orange-500/10 to-transparent rounded-r-2xl">
              <p class="text-xl text-white italic mb-3">
                "{{ block.content }}"
              </p>
              <cite v-if="block.author" class="text-sm text-orange-400 not-italic font-semibold">
                — {{ block.author }}
              </cite>
            </blockquote>

            <!-- Code Block -->
            <figure v-else-if="block.type === 'code'" class="my-10">
              <div class="rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-white/10">
                <div class="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                  <span class="text-xs text-gray-400 font-mono uppercase">{{ block.language }}</span>
                  <button class="text-xs text-orange-400 hover:text-orange-300 transition-colors">
                    Copiar código
                  </button>
                </div>
                <pre
                  class="p-4 overflow-x-auto"><code class="text-sm text-gray-300 font-mono">{{ block.content }}</code></pre>
              </div>
              <figcaption v-if="block.caption" class="text-center text-sm text-gray-500 mt-4">
                {{ block.caption }}
              </figcaption>
            </figure>
          </template>
        </div>

        <!-- Author Bio -->
        <div class="mt-16 p-6 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10">
          <div class="flex items-start gap-4">
            <img :src="currentPost.author.avatar" :alt="currentPost.author.name"
              class="w-16 h-16 rounded-full border-2 border-orange-500" />
            <div>
              <p class="text-sm text-orange-400 font-semibold mb-1">Sobre el autor</p>
              <p class="text-white font-bold text-lg mb-2">{{ currentPost.author.name }}</p>
              <p class="text-gray-400 text-sm leading-relaxed">{{ currentPost.author.bio }}</p>
            </div>
          </div>
        </div>
      </article>

      <!-- Related Posts -->
      <div v-if="relatedPosts.length > 0" class="mt-20">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
          <h2 class="text-2xl md:text-3xl font-bold text-white">Artículos Relacionados</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="post in relatedPosts" :key="post.id" @click="router.push(`/blog/${post.id}`)"
            class="group cursor-pointer bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-500">
            <div class="aspect-video w-full overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
              <img :src="post.image" :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-sm text-gray-400 line-clamp-2">{{ post.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Not Found State -->
  <div v-else class="max-w-[960px] mx-auto mt-20 px-4 pb-20 text-center">
    <h1 class="text-4xl font-bold text-white mb-4">Artículo no encontrado</h1>
    <p class="text-gray-400 mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
    <button @click="goBack"
      class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300">
      Volver al Blog
    </button>
  </div>
</template>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Scroll suave */
* {
  scroll-behavior: smooth;
}

/* Code block styling */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace;
}
</style>
