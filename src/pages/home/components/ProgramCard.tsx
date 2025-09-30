import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, CardContent, CardFooter } from '../../../components/ui/Card'
import { Button } from '../../../components/ui/Button'
import { Program } from '../../../data/programs'

interface ProgramCardProps {
  program: Program
  index: number
  onOpenModal: (program: Program) => void
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ 
  program, 
  index, 
  onOpenModal 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card variant="elevated" className="h-full group cursor-pointer">
        <CardBody>
          {/* Image */}
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <img 
              src={program.image} 
              alt={program.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Tag */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${program.tagColor}`}>
                {program.tag}
              </span>
            </div>
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                Click for Details
              </div>
            </div>
          </div>

          <CardContent>
            {/* Title */}
            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
              {program.title}
            </h3>
            
            {/* Description */}
            <p className="text-neutral-600 leading-relaxed text-sm mb-4">
              {program.description}
            </p>
          </CardContent>

          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              fullWidth
              onClick={() => onOpenModal(program)}
              className="group-hover:variant-primary transition-all duration-300"
            >
              Learn More
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </motion.div>
  )
}

export default ProgramCard